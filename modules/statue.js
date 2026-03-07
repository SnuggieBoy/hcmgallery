import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import * as dat from 'dat.gui';

export const loadStatueModel = (scene, interactiveObjects = []) => {
  const loader = new GLTFLoader();
  const FLOOR_Y = -Math.PI; // -3.14

  // Create a GUI
  const gui = new dat.GUI();
  
  function processModel(model, name, folderName, initialPos, initialScale, isInteractive) {
      model.name = name;
      model.position.copy(initialPos);
      model.scale.copy(initialScale);
      
      const params = { emissive: 0x333333 };

      model.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          if (child.material) {
              child.material.metalness = 0.0;
              child.material.roughness = 1.0;
              
              if (!child.material.emissive) child.material.emissive = new THREE.Color();
              child.material.emissive.setHex(params.emissive);
              
              if (child.material.map) {
                  child.material.map.colorSpace = THREE.SRGBColorSpace;
              }
              child.material.needsUpdate = true;
          }
        }
      });
      
      if (isInteractive) {
          model.userData.interactive = true;
          interactiveObjects.push(model);
      }
      scene.add(model);

      const folder = gui.addFolder(folderName);
      folder.add(model.position, 'x', -20, 20, 0.1).name('Pos X');
      folder.add(model.position, 'y', -10, 10, 0.1).name('Pos Y');
      folder.add(model.position, 'z', -20, 20, 0.1).name('Pos Z');
      folder.add(model.scale, 'x', 0.1, 20, 0.1).name('Scale X').onChange(v => { model.scale.y = v; model.scale.z = v; });
      folder.add(model.rotation, 'y', -Math.PI*2, Math.PI*2, 0.1).name('Rotation Y');
      
      // Cho phép User tự kéo độ sáng theo màu Hex
      folder.addColor(params, 'emissive').name('Brightness').onChange(v => {
          model.traverse((child) => {
              if (child.isMesh && child.material && child.material.emissive) {
                  child.material.emissive.setHex(v);
              }
          });
      });
      folder.open();
  }

  // 1. Load Desk
  loader.load("/models2/antique_office_desk.glb", (gltf) => {
      const desk = gltf.scene;
      processModel(desk, 'desk', 'Office Desk', new THREE.Vector3(0, -3.1, 0), new THREE.Vector3(2, 2, 2), false);
      desk.rotation.y = 0;
  });

  // 2. Load Typewriter
  loader.load("/models2/typewriter.glb", (gltf) => {
      const typewriter = gltf.scene;
      processModel(typewriter, 'typewriter', 'Typewriter', new THREE.Vector3(-0.4, 1, 0.5), new THREE.Vector3(3, 3, 3), true);
      typewriter.rotation.y = 0;
  });

  // 3. Load Radio
  loader.load("/models2/vintage_radio.glb", (gltf) => {
      const radio = gltf.scene;
      processModel(radio, 'vintage_radio', 'Radio', new THREE.Vector3(1.4, 1.6, 0), new THREE.Vector3(1, 1, 1), true);
      radio.rotation.y = -0.7;
  });

  // 4. Load Lamp
  loader.load("/models2/old_vintage_desk_lamp.glb", (gltf) => {
      const lamp = gltf.scene;
      processModel(lamp, 'lamp', 'Desk Lamp', new THREE.Vector3(-1.7, 1, 0.5), new THREE.Vector3(1.5, 1.5, 1.5), true);
      lamp.rotation.y = 0.8;
  });
};

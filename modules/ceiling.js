import * as THREE from "three";

export const createCeiling = (scene, textureLoader) => {
  // Create a stunning modern premium ceiling
  const ceilingGeometry = new THREE.PlaneGeometry(45, 40);
  const ceilingMaterial = new THREE.MeshStandardMaterial({
    color: 0xf8fafc,
    roughness: 0.3,
    metalness: 0.2,
    side: THREE.DoubleSide,
  });
  const ceilingPlane = new THREE.Mesh(ceilingGeometry, ceilingMaterial);

  ceilingPlane.rotation.x = Math.PI / 2;

  ceilingPlane.position.y = 10;
  
  // Add ceiling grid/beams for architectural feel
  const gridHelper = new THREE.GridHelper(45, 20, 0xdcdcdc, 0xdcdcdc);
  gridHelper.position.y = 9.9;
  gridHelper.rotation.x = 0;
  
  scene.add(gridHelper);
  scene.add(ceilingPlane);
};

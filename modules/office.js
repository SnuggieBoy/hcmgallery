import * as THREE from 'three';

export let deskBox = new THREE.Box3();

const FLOOR_Y = -Math.PI;

export const loadOfficeModels = (scene, interactiveObjects) => {
    // --- Breathtaking modern "Equality" sculpture ---
    
    // Pink Ring
    const geometry1 = new THREE.TorusGeometry(2, 0.4, 32, 100);
    const material1 = new THREE.MeshStandardMaterial({ 
        color: 0xec4899,
        roughness: 0.1,
        metalness: 0.9,
    });
    const ring1 = new THREE.Mesh(geometry1, material1);
    ring1.position.set(0, FLOOR_Y + 4, 0);
    ring1.rotation.y = Math.PI / 4;
    ring1.rotation.x = Math.PI / 8;
    ring1.castShadow = true;
    
    // Blue Ring
    const geometry2 = new THREE.TorusGeometry(2, 0.4, 32, 100);
    const material2 = new THREE.MeshStandardMaterial({ 
        color: 0x3b82f6,
        roughness: 0.1,
        metalness: 0.9,
    });
    const ring2 = new THREE.Mesh(geometry2, material2);
    ring2.position.set(0, FLOOR_Y + 4, 0);
    ring2.rotation.y = -Math.PI / 4;
    ring2.rotation.x = -Math.PI / 8;
    ring2.castShadow = true;

    // Glowing Central Orb (Representing Unity)
    const orbGeom = new THREE.SphereGeometry(0.8, 40, 40);
    const orbMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        emissive: 0xffffff,
        emissiveIntensity: 1,
        transparent: true,
        opacity: 0.9
    });
    const orb = new THREE.Mesh(orbGeom, orbMat);
    orb.position.set(0, FLOOR_Y + 4, 0);
    
    // Purple Core Light
    const pointLight = new THREE.PointLight(0x8b5cf6, 15, 20);
    pointLight.position.set(0, FLOOR_Y + 4, 0);
    pointLight.castShadow = true;

    // Sleek Pedestal Base
    const baseGeom = new THREE.CylinderGeometry(2, 2.5, 0.5, 32);
    const baseMat = new THREE.MeshStandardMaterial({ 
        color: 0x1e293b,
        metalness: 0.7,
        roughness: 0.2
    });
    const base = new THREE.Mesh(baseGeom, baseMat);
    base.position.set(0, FLOOR_Y + 0.25, 0);
    base.receiveShadow = true;
    base.castShadow = true;

    // Assemble Group
    const group = new THREE.Group();
    group.add(ring1);
    group.add(ring2);
    group.add(orb);
    group.add(pointLight);
    group.add(base);
    group.name = 'equality_sculpture';
    
    // Constant rotation animation in rendering.js or we can just leave it static 
    // or add a flag to rotate it via eventListeners/rendering.
    group.userData.isAnimating = true;

    scene.add(group);

    // Update collision box
    const box = new THREE.Box3().setFromObject(group);
    box.expandByScalar(1.5); // Provide walking padding
    deskBox.copy(box);

    // Make interactive to show info overlay
    group.children.forEach(child => {
        child.userData = {
            interactive: true,
            info: {
                title: "Biểu tượng Giao Thoa",
                description: "Tác phẩm điêu khắc nghệ thuật đại diện cho sự hòa hợp, tôn trọng và san sẻ giữa hai giới (xanh và hồng) để tạo ra lõi sáng hạnh phúc.",
                artist: "Trạm Chia Sẻ",
                year: "Vĩnh Cửu"
            }
        };
        interactiveObjects.push(child);
    });
};

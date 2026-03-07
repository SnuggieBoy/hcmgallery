import * as THREE from 'three';
import { showModal, hideModal, showHoverInfo, hideHoverInfo } from './ui.js';

let raycaster;
let mouse;
export let interactiveObjects = [];
let hoveredObject = null;

export const isHovering = () => hoveredObject !== null;

// Scale multiplier for hovering
const HOVER_SCALE = 1.05;

export function setupInteraction(camera, objects) {
    interactiveObjects = objects;
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2(0, 0); // Center of the screen
    
    document.addEventListener('click', () => {
        if (hoveredObject) {
            triggerInteraction(hoveredObject);
        }
    });
}

function getInteractiveRoot(object) {
    let root = object;
    while (root.parent && root.parent.type !== 'Scene' && !root.userData?.interactive) {
        root = root.parent;
    }
    if (root.userData?.interactive) {
        return root;
    }
    return object;
}

export function updateInteraction(camera) {
    if (interactiveObjects.length === 0) return; // Add sanity check

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(interactiveObjects, true);
    
    // Check if we hit anything at all before distance filter
    if (intersects.length > 0) {
        console.log("Total hits: ", intersects.length, "Closest object:", intersects[0].object.name, "Distance:", intersects[0].distance);
    } else {
        // Log every 60 frames to prevent spam
        if (Math.random() < 0.02) {
             console.log("Raycaster active. Interactive items count:", interactiveObjects.length);
        }
    }

    const validIntersects = intersects.filter(intersect => intersect.distance < 20);

    if (validIntersects.length > 0) {
        const hitMesh = validIntersects[0].object;
        const target = getInteractiveRoot(hitMesh);
        
        // Debug
        console.log(`Raycast hit mesh: ${hitMesh.name}, resolved root: ${target.name}, isInteractive: ${target.userData?.interactive}, hoverState: ${hoveredObject === target}`);

        if (hoveredObject !== target) {
            resetHoverEffect(hoveredObject);
            hoveredObject = target;
            applyHoverEffect(hoveredObject);
        }
    } else {
        if (hoveredObject) {
            resetHoverEffect(hoveredObject);
            hoveredObject = null;
        }
    }
}

function applyHoverEffect(object) {
    if (!object) return;
    
    if (!object.userData.originalScale) {
        object.userData.originalScale = object.scale.clone();
    }
    // Scale up slightly for feedback based on original scale, prevent infinite scaling
    object.scale.copy(object.userData.originalScale).multiplyScalar(HOVER_SCALE);
    
    object.traverse((child) => {
        if (child.isMesh && child.material) {
            if (!child.userData.originalEmissive) {
                child.userData.originalEmissive = child.material.emissive ? child.material.emissive.clone() : new THREE.Color(0x000000);
            }
            child.material.emissive.setHex(0x333333);
        }
    });

    const name = object.userData.interactiveName || object.name.toLowerCase();
    
    if (name.includes('radio')) {
        showHoverInfo('Radio cổ', 'Thiết bị truyền tải thông tin và tin tức thời kỳ 1930–1945.');
    } else if (name.includes('typewriter')) {
        showHoverInfo('Máy đánh chữ', 'Dùng để soạn thảo tài liệu và truyền đơn cách mạng.');
    } else if (name.includes('paper') || name.includes('báo')) {
        showHoverInfo('Báo chí cách mạng', 'Các tờ báo như Dân Chúng, Dân Nguyện góp phần tuyên truyền phong trào dân chủ.');
    } else if (name.includes('lamp')) {
        showHoverInfo('Đèn bàn', 'Ánh sáng trong những đêm soạn thảo tài liệu cách mạng.');
    } else if (name.includes('window')) {
        showHoverInfo('Đấu xảo 1938', 'Viewing the 1938 Mass Rally at Đấu xảo.');
    }
}

function resetHoverEffect(object) {
    if (!object) return;
    
    if (object.userData.originalScale) {
        object.scale.copy(object.userData.originalScale);
    }
    
    object.traverse((child) => {
        if (child.isMesh && child.material && child.userData.originalEmissive) {
            child.material.emissive.copy(child.userData.originalEmissive);
        }
    });

    hideHoverInfo();
}

function triggerInteraction(object) {
    const name = object.userData.interactiveName || object.name.toLowerCase();
    
    if (name.includes('radio')) {
        console.log('Play radio static and revolutionary news audio here.');
    } else if (name.includes('typewriter')) {
        console.log('Play typewriter typing sound "tạch tạch tạch" here.');
    } else if (name.includes('paper') || name.includes('báo')) {
        console.log('Play paper rustle sound here.');
    } else if (name.includes('lamp')) {
        console.log('Play lamp switch / light flicker sound here.');
    } else {
        console.log('Interacted with ' + object.name);
    }
}

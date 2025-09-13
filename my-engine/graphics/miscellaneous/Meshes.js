import * as THREE from 'three';

function getMaterial(){
    return{
        phong: new THREE.MeshPhongMaterial({color: "#ffffff"}),
        basic: new THREE.MeshBasicMaterial({color: "#ffffff"})
    }
}

export function createBoxMesh(scene, {width = 1, height = 1, depth = 1, materialType = "phong"}){
    const geometry = new THREE.BoxGeometry(width, height, depth);
    const material = getMaterial()[materialType];
    const mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);
    return {mesh, material, geometry};
}

export function createSphereMesh(scene, {radius = 1, widthSegments = 32, heightSegments = 32, materialType = "phong"}){
    const geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);    
    const material = getMaterial()[materialType];
    const mesh = new THREE.Mesh(geometry, material);
    
    scene.add(mesh);
    return {mesh, material, geometry};
}

export function createCapsuleMesh(scene, {radius = 1, height = 2, capSegments = 8, radialSegments = 16, heightSegments = 1, materialType  = "phong"}){
    const geometry = new THREE.CapsuleGeometry(radius, height, capSegments, radialSegments, heightSegments);    
    const material = getMaterial()[materialType];
    const mesh = new THREE.Mesh(geometry, material);
    
    scene.add(mesh);
    return {mesh, material, geometry};
}

export function createCircleMesh(scene, {radius = 1, segments = 32, materialType  = "phong"}){
    const geometry = new THREE.CircleGeometry(radius, segments);
    const material = getMaterial()[materialType];
    const mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);
    return {mesh, material, geometry};
}

export function createPlaneMesh(scene, {width = 1, height = 1, materialType  = "phong"}){
    const geometry = new THREE.PlaneGeometry(width, height);
    const material = getMaterial()[materialType];
    const mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);
    return {mesh, material, geometry};
}

export function dispose(scene, mesh, material, geometry){
    scene.remove(mesh);

    geometry.dispose();

    if (Array.isArray(material)) {
        material.forEach(mat => {
            if (mat.map) mat.map.dispose();
            mat.dispose();
        });
    }
     else {
    if (mesh.material.map) mesh.material.map.dispose();
        mesh.material.dispose();
    }
}

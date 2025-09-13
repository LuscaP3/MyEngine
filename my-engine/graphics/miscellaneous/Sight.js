import * as THREE from 'three';

import { OrthoCamera } from '../../graphics/cameras/OrthoCamera'
import * as MESH from '../miscellaneous/Meshes'

export class Sight{
    #scene
    #camera;
    #circle
    #renderer


    constructor(renderer){
        const canvas = renderer.domElement;

        const width = canvas.clientWidth;
        const height = canvas.clientHeight;

        this.#scene = new THREE.Scene();
        this.#camera = new OrthoCamera(width, height, -10, 1000 );
        this.#renderer = renderer;
        this.#circle = MESH.createCircleMesh(this.#scene, {radius: 5, segments: 16, materialType: "basic"});

        this.#scene.add(this.#circle.mesh);
        renderer.addCamera(this.#camera);
    }

    render(){
        this.#renderer.render(this.#scene, this.#camera);
    }
}
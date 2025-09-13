import * as THREE from 'three';

export class Renderer extends THREE.WebGLRenderer{
    #cameras = []

    constructor(canvasID){
        const canvas = document.querySelector(canvasID);
        
        super({antialias: true, canvas});
    }

    getCanvas(){
        return this.domElement;
    }

    addCamera(camera){
        this.#cameras.push(camera);
    }

    resizeCameras() {
        const canvas = this.domElement;
        const pixelRatio = window.devicePixelRatio;
        const width  = Math.floor( canvas.clientWidth  * pixelRatio );
        const height = Math.floor( canvas.clientHeight * pixelRatio );
        const needResize = canvas.width !== width || canvas.height !== height;

        if (needResize) {
            this.setSize(width, height, false);

            this.#cameras.forEach(cam => {
                cam.updateProjection(width, height);
            });
        }
    }

}
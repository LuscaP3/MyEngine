import * as THREE from 'three';

export class OrthoCamera extends THREE.OrthographicCamera{
    constructor(width, height, near, far){
        super(width / - 2, width / 2, height / 2, height / - 2, near, far);


    }

    updateProjection(width, height){
        this.left = -width / 2;
        this.right = width / 2;
        this.top = height / 2;
        this.bottom = -height / 2;
        
        this.updateProjectionMatrix();
    }
}
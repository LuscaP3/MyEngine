import * as THREE from 'three';

import { Vec3 } from '../../math/Vec3.js'
import { Vec2 } from '../../math/Vec2.js'
import { Target } from './Target';

export class FirstPersonCamera extends THREE.PerspectiveCamera{
    #target = new Target();

    constructor(fov = 75, aspect = window.innerWidth / window.innerHeight, near = 0.1, far = 1000){
        super(fov, aspect, near, far);

        const targetPosition = this.#target.getPosition(this.position);
        this.lookAt(targetPosition.x, targetPosition.y, targetPosition.z);
    }

    sensibility = 0.1;
    renderDistance = 10;
    fov = 75;
    speed = 0.05;

    updateOrientation(xOffSet, yOffSet){
        this.#target.increasePhi(yOffSet * this.sensibility);
        this.#target.increaseTheta(xOffSet * this.sensibility);
        this.#target.updatePosition();

        const targetPosition = this.#target.getPosition(this.position);
        this.lookAt(targetPosition.x, targetPosition.y, targetPosition.z);
    }

    genTranslationVector(keysPressed){
        const translation = new Vec3(0,0,0);

        if (keysPressed.has('KeyW') || keysPressed.has('KeyS')) {
            const direction = this.#target.getVector();
            const directionXZ = new Vec2(direction.x, direction.z);
            directionXZ.normalize();

            if(keysPressed.has('KeyW')){
                translation.x += directionXZ.x;
                translation.z += directionXZ.y;
            }

            if(keysPressed.has('KeyS')){
                translation.x -= directionXZ.x;
                translation.z -= directionXZ.y;
            }            
        }

        if (keysPressed.has('KeyA') || keysPressed.has('KeyD')) {
            const targetPosition = this.#target.getVector();
            const directionXZ = new Vec2(-targetPosition.z, targetPosition.x);
            directionXZ.normalize();


            if(keysPressed.has('KeyA')){
                translation.x -= directionXZ.x;
                translation.z -= directionXZ.y;
            }

            if(keysPressed.has('KeyD')){
                translation.x += directionXZ.x;
                translation.z += directionXZ.y;
            }
        }

        let y = 0
        if (keysPressed.has('Space')) {
            y += 0.5;
        }

        if (keysPressed.has('ShiftLeft')) {
            y -= 0.5;
        }

        translation.normalize();
        translation.y = y;

        return translation;

    }

    applyMovement(keysPressed){
        const translation = this.genTranslationVector(keysPressed);
        translation.multiply(1/50);
        this.translate(translation.x, translation.y, translation.z);
    }

    translate(x,y,z){
        this.position.x += x;
        this.position.y += y;
        this.position.z += z;
    }

    setPosition(x,y,z){
        this.position.set(x,y,z);
    }

    getPosition(){
        return new Vec3(this.position.x, this.position.y, this.position.z).clone();
    }

    getTargetPosition(){
        return this.#target.getPosition(this.position);
    }

    getTargetVector(){
        return this.#target.getVector();
    }

    updateProjection(width, height){
        this.aspect = width/height;
        this.updateProjectionMatrix();
    }
}
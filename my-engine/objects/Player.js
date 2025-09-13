import * as THREE from 'three';

import { Capsule } from '../objects/Capsule.js';
import { Rapier } from '../physics/Rapier'
import { Vec3 } from '../math/Vec3.js'
import { Sphere } from '../objects/Sphere'
import * as MESH from '../graphics/miscellaneous/Meshes.js'

export class Player{
    #Capsule;
    #Camera;
    #Controller;

    #World;
    #Scene;

    #MaxVelocity = 2;

    #forceIntensity = 1/2;

    constructor(scene, world, camera){
        this.#Camera = camera;
        
        this.#Capsule = new Capsule(scene, world, {radius:0.5, height:1, colliderType: "dynamic"});
        this.#Capsule.lockRotation(true,false,true);
        //this.#Capsule.isRendering(false);
        this.#Capsule.setLinearDamping(0.2);

        const capsuleCollider = this.#Capsule.getCollider();
        const membership = 0b0000_0000_0000_0010;
        const filter = 0b0000_0000_0000_0001;
        capsuleCollider.setCollisionGroups( (membership << 16) | filter );

        this.#World = world;
        this.#Scene = scene;
    }

    applyMovement(keysPressed){        
        const translation = this.#Camera.genTranslationVector(keysPressed);
        translation.y = 0;
        translation.normalize();

        translation.multiply(this.#forceIntensity);

        const currentVelocity = this.#Capsule.getLinearVelocity();
        const xzVelocity = new Vec3(Math.abs(currentVelocity.x), 0, Math.abs(currentVelocity.z));
        

        if(xzVelocity.length() < this.#MaxVelocity){
            this.#Capsule.applyLinearVelocity(translation.x, 0, translation.z)
        }

        if(keysPressed.has('Space') && this.isOnGround()){
            this.#Capsule.applyImpulse(0,8,0);
        }
    }

    isOnGround(){
        const capsulePos = this.#Capsule.getPosition();

        const rapier = Rapier.getRapier();
        const ray = new rapier.Ray({x: capsulePos.x, y:capsulePos.y - 1, z: capsulePos.z}, {x:0, y:-1, z:0});

        const hit = this.#World.castRay(ray,100, true, 0, 0b1111_1111_1111_1111_0000_0000_0000_0001)

        if(hit){
            const collider = (hit.collider);
            if(hit.timeOfImpact === 0){
                return true;
            }
        }
        return false;
    }

    setPosition(x, y, z){
        this.#Capsule.setPosition(x,y,z);
    }

    getPosition(){
        return this.#Capsule.getPosition();
    }

    synchronize(){
        this.#Camera.position.x = this.#Capsule.getPosition().x;
        this.#Camera.position.y = this.#Capsule.getPosition().y + 0.5;
        this.#Camera.position.z = this.#Capsule.getPosition().z;
    }
}
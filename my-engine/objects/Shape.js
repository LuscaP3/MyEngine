import { instance } from 'three/tsl';
import * as MESH from '../graphics/miscellaneous/Meshes.js'

export class Shape{
    _Mesh;
    _Geometry;
    _Material;

    _Body;
    _Collider;
    _ColliderDesc

    _Scene;
    _World;

    static #instances = [];

    constructor(){  
        Shape.#instances.push(this);
    }

    static synchronize(){
        Shape.#instances.forEach( instance =>{
            instance.synchronize();
        });
    }

    // Métodos relacionados á renderização (Mesh, Three.js)
    
    setTexture(texture){
        this._Mesh.material.map = texture;
    }

    setColor(newColor){
        this._Mesh.material.color.set(newColor);
    }

    setMaterial(newMaterial){
        this._Mesh.material.dispose();
        this._Mesh.material = newMaterial;
    }

    castShadow(boolean){
        this._Mesh.castShadow = boolean;
    }

    receiveShadow(boolean){
        this._Mesh.receiveShadow = boolean;
    }

    isRendering(boolean){
        this._Mesh.visible = boolean;
    }

    getMesh(){
        return this._Mesh;
    }

    // Métodos relacionados á física (Body, Rapier)
    setPosition(a, b, c){
        let obj = a;
        if(typeof a == "number"){
            obj = {x:a, y:b, z:c}
        }

        this._Body.setTranslation(obj, true);
    }

    getLinearVelocity(){
        return this._Body.linvel(); 
    }


    setLinearVelocity(a, b, c){
        let obj = a;
        if(typeof a == "number"){
            obj = {x:a, y:b, z:c}
        }

        this._Body.setLinvel(obj, true); 
    }

    applyLinearVelocity(a, b, c){
        let obj = a;
        if(typeof a == "number"){
            obj = {x:a, y:b, z:c}
        }

        const velocity = this._Body.linvel();
        obj.x += velocity.x;
        obj.y += velocity.y;
        obj.z += velocity.z;

        this._Body.setLinvel(obj, true); 
    }

    setAngularVelocity(a, b, c){
        let obj = a;
        if(typeof a == "number"){
            obj = {x:a, y:b, z:c}
        }

        this._Body.setAngvel(obj, true); 
    }

    applyForce(a, b, c){
        let obj = a;
        if(typeof a == "number"){
            obj = {x:a, y:b, z:c}
        }

        this._Body.addForce(obj, true);
    }

    applyImpulse(a, b, c){
        let obj = a;
        if(typeof a == "number"){
            obj = {x:a, y:b, z:c}
        }

        this._Body.applyImpulse(obj, true);
    }

    getPosition(){
        return this._Body.translation();
    }

    translate(a, b, c){
        let obj = a;
        if(typeof a == "number"){
            obj = {x:a, y:b, z:c}
        }

        const oldPosition = this.getPosition();
        const newX = oldPosition.x + obj.x;
        const newY = oldPosition.y + obj.y;
        const newZ = oldPosition.z + obj.z;
        this._Body.setTranslation({ x:newX, y:newY, z:newZ }, true);
    }

    setRotation(angle, a, b, c){
        let obj = a;
        if(typeof a == "number"){
            obj = {x:a, y:b, z:c}
        }

        const rad = angle * Math.PI/180;
        const sinHalf = Math.sin(rad / 2);
        const cosHalf = Math.cos(rad / 2);

        const quaternion = {
            x: obj.x * sinHalf,
            y: obj.y * sinHalf,
            z: obj.z * sinHalf,
            w: cosHalf
        };

        this._Body.setRotation(quaternion, true);

    }

    getBody(){
        return this._Body;
    }

    getCollider(){
        return this._Collider;
    }

    setMass(newMass){
        this._Collider.setDensity(newMass);
    }

    setLinearDamping(value){
        this._Body.setLinearDamping(value);
    }

    setAngularDamping(value){
        this._Body.setAngularDamping(value);
    }

    lockRotation(x,y,z){
        this._Body.lockRotations(true, x,y,z);

    }

    // Métodos relacionados á colisão (Collider, Rapier)

    setFriction(value){
        this._Collider.setFriction(value);
    }

    setRestitution(value){
        this._Collider.setRestitution(value);
    }

    // Sincronização entre física e gráfica

    synchronize(){
        const pos = this._Body.translation();
        const rot = this._Body.rotation();

        this._Mesh.position.set(pos.x, pos.y, pos.z);
        this._Mesh.quaternion.set(rot.x, rot.y, rot.z, rot.w);
    }

    // Outros

    dispose(){
        MESH.dispose(this._Scene, this._Mesh, this._Material, this._Geometry);
        this._World.removeRigidBody(this._Body);
        this._World.removeCollider(this._Collider, true);

        const index = Shape.#instances.indexOf(this);
        if (index !== -1) {
            Shape.#instances.splice(index, 1);
        }
    }

    setLifeTime(lifeTime){
        setTimeout(() => {
            this.dispose();
        }, lifeTime * 1000);
    }
}
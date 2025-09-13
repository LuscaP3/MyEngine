import * as myEngine from '../../my-engine/MyEngine'
import * as project from '../Project'


export class GameObject{
    _Shadow;

    _Surface;
    _Body;

    _Scene;
    _World;

    constructor(scene, world){
        // Guardando a cena e o mundo (só pra facilitar o 'dispose()'.

        this._Scene = scene;
        this._World = world;
    }

    setPosition(a, b,c ){
        let obj = a;
        if(typeof a == "number"){
            obj = {x:a, y:b, z:c}
        }

        if(this._Shadow){
            this._Shadow.mesh.position.set(obj.x, obj.y + 0.001, obj.z);
        }

        obj.y += this.getHeight()/2;

        this._Body.body.setTranslation(obj, true);
        this._Surface.setPosition(obj);
    }

    setRotation(angle){

        this._Surface.rotate(angle);

        angle = angle * Math.PI/180;

        const quaternion = {
            x: 0,
            y: Math.sin(angle/2),
            z: 0,
            w: Math.cos(angle/2),
        };

        if(this._Shadow){
            this._Shadow.mesh.rotation.z = angle;
        }

        this._Body.body.setRotation(quaternion, true);
    }

    getWidth(){
        return this._Surface.getWidth();
    }

    getHeight(){
        return this._Surface.getHeight();
    }

    dispose(){
        myEngine.MESHES.dispose(scene);
        
        this._World.removeRigidBody(this._Body);
        this._World.removeCollider(this._Body.collider, true);
    }
}
import * as THREE from 'three'
import * as myEngine from '../my-engine/MyEngine'

export class Surface{
    #Mesh;
    #Geometry;
    #Material;

    #Height;
    #Width;

    #Position = {x:0, y:0, z:0};

    #Scene;

    constructor(scene, texture, repeatX = 1, repeatY =1){
        texture.wrapS = THREE.RepeatWrapping;
        texture.repeat.set(repeatX, repeatY);

        this.#Scene = scene;

        this.#Width = texture.image.width/100 * repeatX;
        this.#Height = texture.image.height/100 * repeatY;

        const plane = myEngine.MESHES.createPlaneMesh(scene, {width: this.#Width, height: this.#Height, materialType: "phong"});
        plane.mesh.position.y = this.#Height/2;
        this.#Position.y = this.#Height/2;

        this.#Mesh = plane.mesh;
        this.#Geometry = plane.geometry;
        this.#Material = plane.material;

        this.#Material.map = texture;

        this.#Material.transparent = true;
        this.#Material.alphaTest = 0.5;
    }

    setDoubleSide(bool){
        if(bool){
            this.#Material.side = THREE.DoubleSide;
        }
        else{
            this.#Material.side = THREE.FrontSide
        }
    }

    getWidth(){
        return this.#Width;
    }

    getHeight(){
        return this.#Height;
    }

    setPosition(a, b, c){
        let obj = a;
        if(typeof a == "number"){
            obj = {x:a, y:b, z:c}
        }

        this.#Mesh.position.set(obj.x, obj.y, obj.z);
        this.#Position = obj;
    }

    translate(a, b, c){
        let obj = a;
        if(typeof a == "number"){
            obj = {x:a, y:b, z:c}
        }

        const currentPosition = this.#Position;
        this.#Mesh.position.set(currentPosition.x + obj.x, currentPosition.y + obj.y, currentPosition.z + obj.z);
        this.#Position = {x:currentPosition.x + obj.x, y:currentPosition.y + obj.y, z:currentPosition.z + obj.z};
    }

    rotate(angle){
        this.#Mesh.rotation.y = angle * Math.PI/180;
    }

    align(cameraPosition){
        const vector = new myEngine.Vec3(cameraPosition.x - this.#Position.x, 0, cameraPosition.z - this.#Position.z);
        vector.normalize();
        const angle = Math.atan2(vector.x, vector.z);
 
        this.#Mesh.rotation.y = angle;
    }

    dispose(){
        myEngine.MESHES.dispose(scene, this.#Mesh, this.#Material, this.#Geometry);
    }
}
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import { Rapier } from '../physics/Rapier'
import { RawColliderSet } from '@dimforge/rapier3d/rapier_wasm3d';

export class Model{
    #gltfScene = undefined;
    #World;

    #rigidBodies = [];

    #vertices = [];
    #indices = [];

    constructor(scene, world, url){
        this.#World = world;
        const rapier = Rapier.getRapier();

        const gltfLoader = new GLTFLoader();

        gltfLoader.load(url, (gltf) => {
          this.#gltfScene = gltf.scene;
          scene.add(this.#gltfScene);
        
          gltf.scene.traverse((child) => {
            if(child.isMesh) {
              child.updateMatrixWorld(true);
              const geom = child.geometry.clone();
              geom.applyMatrix4(child.matrixWorld);
        
              // Garantir índice
              if(!geom.index) {
                const count = geom.getAttribute('position').count;
                const idx = new (count>65535?Uint32Array:Uint16Array)(count);
                for(let i=0;i<count;i++) idx[i]=i;
                geom.setIndex(new THREE.BufferAttribute(idx,1));
              }

              const vertices = geom.attributes.position.array;
              const indices = geom.index.array;
        
              this.#vertices.push(vertices);
              this.#indices.push(indices);
        
              const bodyDesc = rapier.RigidBodyDesc.fixed();
              const body = world.createRigidBody(bodyDesc);
              const collider = world.createCollider(rapier.ColliderDesc.trimesh(vertices, indices), body);

              this.#rigidBodies.push({body, collider});
              }
          });
        });
    }

    castShadow(boolean){
        if(this.#gltfScene == undefined){
            setTimeout(() => {
                this.castShadow(boolean);
            }, 10);
        }
        else{
            this.#gltfScene.traverse((child) => {
                if (child.isMesh) {
                child.castShadow = boolean;
                }
            });
        }
    }

    receiveShadow(boolean){
        if(this.#gltfScene == undefined){
            setTimeout(() => {
                this.receiveShadow(boolean);
            }, 10);
        }
        else{
            this.#gltfScene.traverse((child) => {
                if (child.isMesh) {
                child.receiveShadow = boolean;
                }
            });
        }
    }

    setPosition(a, b, c){
       let obj = a;
        if(typeof a == "number"){
            obj = {x:a, y:b, z:c}
        }

        if(this.#rigidBodies.length == 0){
            setTimeout(() => {
                this.setPosition(obj);
            }, 10);
        }
        else{
           this.#rigidBodies.forEach((element) => {
                element.body.setTranslation(obj, true);
            });

            this.#gltfScene.position.set(obj.x, obj.y, obj.z);
        }
    }
}
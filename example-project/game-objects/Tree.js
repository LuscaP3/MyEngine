import * as myEngine from '../../my-engine/MyEngine'
import * as project from '../Project'

import * as THREE from 'three'

import { GameObject } from './GameObject'


export class Tree extends GameObject{

    constructor(scene, world, textureId = 'tree1'){

        super(scene, world);

        // Objeto árvore (classe).

        const texture = myEngine.Texture.getTextureById(textureId);
        this._Surface = new project.Surface(scene, texture);

        // Mesh da sombra.

        this._Shadow = myEngine.MESHES.createCircleMesh(scene, {radius: 1.5});

        this._Shadow.mesh.rotation.x = -90 * Math.PI/180;
        this._Shadow.mesh.position.y = 0.001;

        this._Shadow.material.color.set('#2b2b2b');
        this._Shadow.material.transparent = true;
        this._Shadow.material.opacity = 0.5;


        // Colisor.

        this._Body = myEngine.BODIES.createCylinderBody(world, {halfHeight: 3, radius: 0.25, colliderType: "fixed"});
        this._Body.body.setTranslation({x:0, y:this.getHeight()/2, z:0}, true);

    }

    align(cameraPosition){
        this._Surface.align(cameraPosition);
    }
}
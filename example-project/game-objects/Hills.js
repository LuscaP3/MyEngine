import * as myEngine from '../../my-engine/MyEngine'
import * as project from '../Project'

import * as THREE from 'three'
    
import { GameObject } from './GameObject'
    
    
export class Hills extends GameObject{
    
    constructor(scene, world, repeat = 1, textureId = 'hills'){
    
        super(scene, world);
    
        // Objeto Cerca (classe).

        const texture = myEngine.Texture.getTextureById(textureId);
        texture.wrapS = THREE.RepeatWrapping;
        texture.repeat.set(repeat, 1);

        this._Surface = new project.Surface(scene, texture, repeat, 1);
        this._Surface.setDoubleSide(true);

        // Mesh da sombra.

        this._Shadow = undefined;

        // Colisor.
        this._Body = myEngine.BODIES.createBoxBody(world, {width: this.getWidth()/2, height: this.getHeight()/2, depth: 0.25, colliderType: "fixed"});
        this._Body.body.setTranslation({x:0, y:this.getHeight()/2, z:0}, true);    
    }
}
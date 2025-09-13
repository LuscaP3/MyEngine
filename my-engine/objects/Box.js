import * as MESH from '../graphics/miscellaneous/Meshes.js'
import * as BODIES from '../physics/Bodies.js'

import { Shape } from './Shape.js'

export class Box extends Shape{

    constructor(scene, world, {width = 1, height = 1, depth = 1, materialType= "phong", colliderType= "dynamic"}){
        super();
        const boxBody = BODIES.createBoxBody(world, {width: width/2, height: height/2, depth: depth/2, colliderType: colliderType});

        this._Body = boxBody.body;
        this._Collider = boxBody.collider;
        this._ColliderDesc = boxBody.colliderDesc;

        const membership = 0b0000_0000_0000_0001;
        const filter = 0b1111_1111_1111_1111;
        this._Collider.setCollisionGroups( (membership << 16) | filter );

        const boxMesh = MESH.createBoxMesh(scene, {width: width, height: height, depth: depth, materialType: materialType});

        this._Scene = scene;
        this._World = world;

        this._Mesh = boxMesh.mesh;
        this._Geometry = boxMesh.geometry;
        this._Material = boxMesh.material;
    }
}
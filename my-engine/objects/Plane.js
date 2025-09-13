import * as MESH from '../graphics/miscellaneous/Meshes.js'
import * as BODIES from '../physics/Bodies.js'

import { Shape } from './Shape.js'

export class Plane extends Shape{

    constructor(scene, world, {width = 1, height = 1, depth = 0.001, materialType= "phong", colliderType= "dynamic"}){
        super();
        const planeBody = BODIES.createBoxBody(world, {width: width/2, height: height/2, depth: depth/2, colliderType: colliderType});

        this._Body = planeBody.body;
        this._Collider = planeBody.collider;
        this._ColliderDesc = planeBody.colliderDesc;

        const membership = 0b0000_0000_0000_0001;
        const filter = 0b1111_1111_1111_1111;
        this._Collider.setCollisionGroups( (membership << 16) | filter );

        const boxMesh = MESH.createPlaneMesh(scene, {width: width, height: height, materialType: materialType});

        this._Scene = scene;
        this._World = world;

        this._Mesh = boxMesh.mesh;
        this._Geometry = boxMesh.geometry;
        this._Material = boxMesh.material;

        this.setRotation(-90, 1,0,0);
    }
}
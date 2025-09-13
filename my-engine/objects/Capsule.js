import * as MESH from '../graphics/miscellaneous/Meshes.js'
import * as BODIES from '../physics/Bodies.js'

import { Shape } from './Shape.js'

export class Capsule extends Shape{

    constructor(scene, world, {radius=1, height=1, capSegments = 8, radialSegments = 16, heightSegments = 1, materialType = "phong", colliderType="dynamic"}){
        super();
        const capsuleBody = BODIES.createCapsuleBody(world, {halfHeight: height/2, radius: radius, colliderType: colliderType});

        this._Body = capsuleBody.body;
        this._Collider = capsuleBody.collider;
        this._ColliderDesc = capsuleBody.colliderDesc;

        const membership = 0b0000_0000_0000_0001;
        const filter = 0b1111_1111_1111_1111;
        this._Collider.setCollisionGroups( (membership << 16) | filter );

        const capsuleMesh = MESH.createCapsuleMesh(scene, {radius: radius, height: height, capSegments: capSegments, radialSegments: radialSegments, height: heightSegments, materialType: materialType});

        this._Scene = scene;
        this._World = world;

        this._Mesh = capsuleMesh.mesh;
        this._Geometry = capsuleMesh.geometry;
        this._Material = capsuleMesh.material;
    }
}
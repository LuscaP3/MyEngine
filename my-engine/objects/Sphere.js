import * as MESH from '../graphics/miscellaneous/Meshes.js'
import * as BODIES from '../physics/Bodies.js'


import { Shape } from './Shape.js'

export class Sphere extends Shape{

    constructor(scene, world, {radius = 1, widthSegments = 32, heightSegments = 32, materialType = "phong", colliderType = "dynamic"}){
        super();
        const sphereBody = BODIES.createSphereBody(world, {radius: radius, colliderType: colliderType});

        this._Body = sphereBody.body;
        this._Collider = sphereBody.collider;
        this._ColliderDesc = sphereBody.colliderDesc;

        const membership = 0b0000_0000_0000_0001;
        const filter = 0b1111_1111_1111_1111;
        this._Collider.setCollisionGroups( (membership << 16) | filter );

        const sphereMesh = MESH.createSphereMesh(scene, {radius: radius, widthSegments: widthSegments, heightSegments: heightSegments, meterialType: materialType});

        this._Scene = scene;
        this._World = world;

        this._Mesh = sphereMesh.mesh;
        this._Geometry = sphereMesh.geometry;
        this._Material = sphereMesh.material;
    }
}
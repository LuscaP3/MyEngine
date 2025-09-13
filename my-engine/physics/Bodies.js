import { Rapier } from '../physics/Rapier'

function bodyTypes() {
    const rapier = Rapier.getRapier();

        return {
            fixed: rapier.RigidBodyDesc.fixed(),
            dynamic: rapier.RigidBodyDesc.dynamic(),
            kinematicPosition: rapier.RigidBodyDesc.kinematicPositionBased(),
            kinematicVelocity: rapier.RigidBodyDesc.kinematicVelocityBased()
        };
    }

export function createBoxBody(world, {width = 1, height = 1, depth = 1, colliderType = "dynamic"}){
    const rapier = Rapier.getRapier();

    const bodyDesc = bodyTypes()[colliderType];
    const body = world.createRigidBody(bodyDesc);

    const colliderDesc = rapier.ColliderDesc.cuboid(width, height, depth);
    const collider = world.createCollider(colliderDesc, body);

    return {body, collider, colliderDesc};
}

export function createSphereBody(world, {radius = 1, colliderType = "dynamic"}){
    const rapier = Rapier.getRapier();

    const bodyDesc = bodyTypes()[colliderType];
    const body = world.createRigidBody(bodyDesc);

    const colliderDesc = rapier.ColliderDesc.ball(radius);
    const collider = world.createCollider(colliderDesc, body);

    return {body, collider, colliderDesc};
}

export function createCapsuleBody(world, {radius = 1, halfHeight = 1, colliderType = "dynamic"}){
    const rapier = Rapier.getRapier();

    const bodyDesc = bodyTypes()[colliderType];
    const body = world.createRigidBody(bodyDesc);

    const colliderDesc = rapier.ColliderDesc.capsule(halfHeight, radius);
    const collider = world.createCollider(colliderDesc, body);

    return {body, collider, colliderDesc};
}

export function createCylinderBody(world, {radius = 0.5, halfHeight = 1, colliderType = "dynamic"}){
    const rapier = Rapier.getRapier();

    const bodyDesc = bodyTypes()[colliderType];
    const body = world.createRigidBody(bodyDesc);

    const colliderDesc = rapier.ColliderDesc.cylinder(halfHeight, radius);
    const collider = world.createCollider(colliderDesc, body);

    return {body, collider, colliderDesc};
}
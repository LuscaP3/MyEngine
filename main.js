import * as THREE from 'three';

import * as myEngine from './my-engine/MyEngine'
import * as project from './example-project/Project'


const rapierClass = new myEngine.Rapier();
await rapierClass.init();
const rapier = myEngine.Rapier.getRapier();

const world = new rapier.World({x: 0, y: -9.81, z: 0});

const scene = new THREE.Scene();
const renderer = new myEngine.Renderer('#scene');
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

renderer.autoClear = false;
renderer.setClearColor("#3256a8");

const camera = new myEngine.FirstPersonCamera();
camera.setPosition(0,5,0);

renderer.addCamera(camera);


await project.loadTextures();

const tree1 = new project.Tree(scene, world);
tree1.setPosition(-44, 0, 12);

const tree2 = new project.Tree(scene, world);
tree2.setPosition(-48, 0, 0);

const tree3 = new project.Tree(scene, world);
tree3.setPosition(-44, 0, 23);

const tree4 = new project.Tree(scene, world);
tree4.setPosition(-43, 0, 8);

const tree5 = new project.Tree(scene, world);
tree5.setPosition(-41, 0, 16);

const tree6 = new project.Tree(scene, world);
tree6.setPosition(-42, 0, -7);

const tree7 = new project.Tree(scene, world);
tree7.setPosition(-45, 0, -13);

const fence1 = new project.Fence(scene, world, 9);
fence1.setPosition(-38, 0, 5);
fence1.setRotation(90);

const fence2 = new project.Fence(scene, world, 2);
fence2.setPosition(-43, 0, -17.5);

const fence3 = new project.Fence(scene, world);
fence3.setPosition(1, 0, 35);

const fence4 = new project.Fence(scene, world, 3);
fence4.setPosition(3.5, 0, 42.5);
fence4.setRotation(90);

const fence5 = new project.Fence(scene, world, 7);
fence5.setPosition(-27, 0, 35);


const player = new myEngine.Player(scene, world, camera);
player.setPosition(10,10,10);

const events = new myEngine.EventsManager(renderer.getCanvas());

const ground = new myEngine.Box(scene, world, {width: 100, height: 1, depth: 100, colliderType:"fixed"});
await myEngine.Texture.loadTexture('ground', "../textures/ground-2.png");

const groundTexture = myEngine.Texture.getTextureById('ground');
groundTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();
ground.setTexture(groundTexture);
ground.setPosition(0, -0.5, 0);


const sight = new myEngine.Sight(renderer);

await myEngine.Texture.loadTexture('container', "../textures/container-2.png");

const box1 = new myEngine.Box(scene, world, {width: 1.6, height: 1.6, depth: 1.6});
box1.setTexture(myEngine.Texture.getTextureById('container'));

const box2 = new myEngine.Box(scene, world, {width: 1.6, height: 1.6, depth: 1.6});
box2.setTexture(myEngine.Texture.getTextureById('container'));
box2.setPosition(0.25,1.6,0);

const box3 = new myEngine.Box(scene, world, {width: 1.6, height: 1.6, depth: 1.6});
box3.setTexture(myEngine.Texture.getTextureById('container'));
box3.setPosition(2,0,1);

const box4 = new myEngine.Box(scene, world, {width: 1.6, height: 1.6, depth: 1.6});
box4.setTexture(myEngine.Texture.getTextureById('container'));
box4.setPosition(-2,0,1.5);

const hills1 = new project.Hills(scene, world, 5);
hills1.setRotation(90);
hills1.setPosition(-50,0,0);

const hills2 = new project.Hills(scene, world, 5);
hills2.setRotation(90);
hills2.setPosition(-55,4.5,0);

const hills3 = new project.Hills(scene, world, 5);
hills3.setRotation(90);
hills3.setPosition(50,0,0);

const hills4 = new project.Hills(scene, world, 5);
hills4.setRotation(90);
hills4.setPosition(55,4.5,0);


// Luz
const ambientLight = new THREE.AmbientLight("#ffffff");
scene.add(ambientLight);

const directionLight = new THREE.DirectionalLight("#ffffff", 0.5);
scene.add(directionLight);


// Game loop.
function MainLoop(time) {
  time *= 0.001;

  const p = document.getElementById("PlayerPos");
  const playerPos = player.getPosition();
  p.textContent = "Position:  " + Math.round(playerPos.x) + ", " + Math.round(playerPos.y) + ", " + Math.round(playerPos.z);

  camera.updateOrientation(events.getMovementX(), events.getMovementY());
  //camera.applyMovement(events.keysPressed);
  player.applyMovement(events.keysPressed);

  world.step();

  player.synchronize();
  myEngine.Shape.synchronize();

  renderer.clear();
  renderer.render(scene, camera);
  sight.render();
  renderer.resizeCameras();

  tree1.align(camera.getPosition());
  tree2.align(camera.getPosition());
  tree3.align(camera.getPosition());
  tree4.align(camera.getPosition());
  tree5.align(camera.getPosition());
  tree6.align(camera.getPosition());
  tree7.align(camera.getPosition());

  if(events.leftClick){
    const bullet = new myEngine.Sphere(scene, world, {radius: 0.25})
    bullet.setPosition(camera.getTargetPosition());
    bullet.setLifeTime(5);
    bullet.setMass(2);
    
    const direction = camera.getTargetVector();
    bullet.applyImpulse(direction.x, direction.y, direction.z);    
  }
  
  requestAnimationFrame(MainLoop);
}
requestAnimationFrame(MainLoop);
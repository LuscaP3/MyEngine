import * as THREE from 'three';

import * as myEngine from './my-engine/MyEngine'
import * as project from './example-project/Project'

import * as MESH from './my-engine/graphics/miscellaneous/Meshes'

const rapierClass = new myEngine.Rapier();
await rapierClass.init();
const rapier = myEngine.Rapier.get();

const world = new rapier.World({x: 0, y: -9.81, z: 0});

const scene = new THREE.Scene();
const renderer = new myEngine.Renderer('#scene');
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

renderer.autoClear = false;
renderer.setClearColor("#a1e0f0");

const camera = new myEngine.FirstPersonCamera();
camera.setPosition(0,5,0);

renderer.addCamera(camera);
const events = new myEngine.EventsManager(renderer.getCanvas());

const player = new myEngine.Player(scene, world, camera);
player.setPosition(10,10,0);

const sight = new myEngine.Sight(renderer);

const skyBox = new MESH.createBoxMesh(scene, {width:1024, height:1024, depth: 1024, materialType:'basic'});
await myEngine.Texture.loadTexture('background', "assets/textures/background.png");
skyBox.material.map = myEngine.Texture.getTextureById('background');
skyBox.material.side = THREE.DoubleSide;

const grid = new myEngine.Plane(scene, world, {width:256, height:256, materialType:'basic', colliderType:'fixed'});
await myEngine.Texture.loadTexture('grid', "assets/textures/grid.png");
const gridTexture = myEngine.Texture.getTextureById('grid');
//gridTexture.anisotropy = renderer.capabilities.getMaxAnisotropy();
gridTexture.magFilter = THREE.NearestFilter;
grid.setTexture(gridTexture);

const gridMaterial = grid.getMaterial();
gridMaterial.transparent = true;
gridMaterial.magFilter = THREE.NearestFilter; 

const tardis = new myEngine.Model(scene,world, "assets/models/Tardis.gltf");
tardis.setPosition(-8, 0, -27);

const house = new myEngine.Model(scene,world, "assets/models/Predio.gltf");
house.setPosition(6, 0, 30);

await project.loadTextures();

const tree1 = new project.Tree(scene, world);
tree1.setPosition(-12, 0, 22);

const tree2 = new project.Tree(scene, world);
tree2.setPosition(-20, 0, 19);

const tree3 = new project.Tree(scene, world);
tree3.setPosition(1, 0, 16);

const fence = new project.Fence(scene, world,10);
fence.setPosition(0, 0, 13);


await myEngine.Texture.loadTexture('container', "assets/textures/container-2.png");

const box1 = new myEngine.Box(scene, world, {width: 1.6, height: 1.6, depth: 1.6});
box1.setPosition(0,1,0);
box1.setTexture(myEngine.Texture.getTextureById('container'));

const box2 = new myEngine.Box(scene, world, {width: 1.6, height: 1.6, depth: 1.6});
box2.setTexture(myEngine.Texture.getTextureById('container'));
box2.setPosition(0.25,2.6,0);

const box3 = new myEngine.Box(scene, world, {width: 1.6, height: 1.6, depth: 1.6});
box3.setTexture(myEngine.Texture.getTextureById('container'));
box3.setPosition(2,1,1);

const box4 = new myEngine.Box(scene, world, {width: 1.6, height: 1.6, depth: 1.6});
box4.setTexture(myEngine.Texture.getTextureById('container'));
box4.setPosition(-2,1,1.5);

const box5 = new myEngine.Box(scene, world, {width: 1.6, height: 1.6, depth: 1.6});
box5.setTexture(myEngine.Texture.getTextureById('container'));
box5.setPosition(-6,1,3);


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

  tree1.align(camera.getPosition());
  tree2.align(camera.getPosition());
  tree3.align(camera.getPosition());

  player.synchronize();
  myEngine.Shape.synchronize();

  renderer.clear();
  renderer.render(scene, camera);
  sight.render();
  renderer.resizeCameras();

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
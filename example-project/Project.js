export { Surface } from './Surface'
export { Tree } from './game-objects/Tree'
export { Fence } from './game-objects/Fence'
export { Hills } from './game-objects/Hills'


import * as myEngine from '../my-engine/MyEngine'

import texturePaths from './texture-paths.json';


// Função para carregar todas as texturas presentes indicadas no arquivo json.

export async function loadTextures() {
    for (const element of texturePaths.textures) {
    await myEngine.Texture.loadTexture(element.identifier, element.path);
  }
}
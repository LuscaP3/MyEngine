export { Surface } from './Surface'
export { Tree } from './game-objects/Tree'
export { Fence } from './game-objects/Fence'
export { Hills } from './game-objects/Hills'


import * as myEngine from '../my-engine/MyEngine'


// Função para carregar todas as texturas presentes indicadas no arquivo json.

export async function loadTextures() {
    try {
        // Se estiver no Node < 18, use "import fetch from 'node-fetch';"
        const response = await fetch('./example-project/texture-paths.json');
        
        if (!response.ok) {
            throw new Error('Erro ao buscar o arquivo JSON');
        }

        const data = await response.json();

        // Aqui você espera carregar cada textura
        for (const element of data.textures) {
            await myEngine.Texture.loadTexture(element.identifier, element.path);
        }

        return data; // garante que a função resolve só depois de tudo
    } catch (error) {
        console.error("Erro:", error);
        throw error;
    }
}
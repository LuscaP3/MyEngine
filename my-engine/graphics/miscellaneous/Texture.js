import * as THREE from 'three'

export class Texture{
    #Identifier;
    #Path;
    #Texture;

    static #loadedTextures = [];

    constructor(id, path, texture){
        this.#Identifier = id;
        this.#Path = path;
        this.#Texture = texture;
    }

    static #checkPath(path){
        const text = Texture.#loadedTextures.find( (texture) => {
            return texture.getPath() == path;
        });

        if(text){
            throw new Error(`The path "${path}" was already loaded!`);
        }
    }

    static #checkIdentifier(id){
        const text = Texture.#loadedTextures.find( (texture) => {
            return texture.getIdentifier() == id;
        });

        if(text){
            throw new Error(`Identifier "${id}" already exists!`);
        }
    }

    static async loadTexture(id, path){
        Texture.#checkIdentifier(id);
        Texture.#checkPath(path);

        const loader = new THREE.TextureLoader();
        const texture = await loader.loadAsync(path);
        texture.colorSpace = THREE.SRGBColorSpace;

        const newTexture = new Texture(id, path, texture);
        Texture.#loadedTextures.push(newTexture);
    }

    static getTextureById(id){
        const text = Texture.#loadedTextures.find( (texture) => {
            return texture.getIdentifier() == id;
        });

        if(!text){
            throw new Error(`Identifier "${id}" does not exists!`);
        }

        return text.getTexture().clone();
    }

    getIdentifier(){
        return this.#Identifier;
    }

    getPath(){
        return this.#Path;
    }

    getTexture(){
        return this.#Texture;
    }
}
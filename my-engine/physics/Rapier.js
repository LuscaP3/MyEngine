import RAPIER from 'https://cdn.skypack.dev/@dimforge/rapier3d-compat';

export class Rapier{
    static #RAPIER = undefined;

    constructor(){

    }

    async init(){
        await RAPIER.init();
    }

    static get(){
        return RAPIER;
    }
}
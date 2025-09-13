export class Rapier{
    static #RAPIER = undefined;
    static WorldStep = 1/60;

    constructor(){

    }

    async init(){
        if(Rapier.#RAPIER){
            throw new Error("Classe PhysicsHandlerer já instanciada");
        }
        else{
            Rapier.#RAPIER = await import('@dimforge/rapier3d');
        }
    }

    static getRapier(){
        return Rapier.#RAPIER;
    }
}
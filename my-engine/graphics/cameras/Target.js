import { Vec3 } from '../../math/Vec3.js'

export class Target {
    #PHI = 90;
    #THETA = 0;

    #position = new Vec3(0,0,0);

    constructor(){this.updatePosition()}

    updatePosition(){
        this.#position.x = Math.sin(this.#PHI * Math.PI / 180) * Math.cos(this.#THETA * Math.PI / 180);
        this.#position.y = Math.cos(this.#PHI * Math.PI / 180);
        this.#position.z = Math.sin(this.#PHI * Math.PI / 180) * Math.sin(this.#THETA * Math.PI / 180);
    }

    increasePhi(newPhi){
        const sum = this.#PHI + newPhi;
        this.#PHI = sum < 180 && sum > 0 ? sum : this.#PHI;
    }

    increaseTheta(newTheta){
        this.#THETA = this.#THETA + newTheta >= 360 ? 0 : this.#THETA + newTheta;
        this.#THETA = this.#THETA + newTheta <= -360 ? 0 : this.#THETA + newTheta;
    }

    getPosition(cameraPosition){
        const clone = this.#position.clone();
        clone.add(cameraPosition);
        return clone;
    }

    getVector(){
        return this.#position.clone();
    }
}
export class Vec3{
    x=0;
    y=0;
    z=0

    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
    }

    normalize(){
        const length = this.length();

        if(length != 0){
            this.x /= length;
            this.y /= length;
            this.z /= length;
        }
    }

    length(){
        return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
    }

    clone(){
        return new Vec3(this.x, this.y, this.z);
    }

    add(vec3){
        this.x += vec3.x;
        this.y += vec3.y;
        this.z += vec3.z;
    }

    multiply(scalar){
        this.x *= scalar;
        this.y *= scalar;
        this.z *= scalar;
    }

    dot(vec3) {
        return this.x * vec3.x + this.y * vec3.y + this.z * vec3.z;
    }

    cross(vec3){
        const x = this.y * vec3.z - this.z * vec3.y;
        const y = this.z * vec3.x - this.x * vec3.z;
        const z = this.x * vec3.y - this.y * vec3.x;

        this.x = x;
        this.y = y;
        this.z = z;
    }
}
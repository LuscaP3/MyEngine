export class Vec2{
    x=0;
    y=0;

    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    normalize(){
        const length = this.length();

        if(length != 0){
            this.x /= length;
            this.y /= length;
        }
    }

    length(){
        return Math.sqrt(this.x ** 2, this.y ** 2);
    }

    clone(){
        return new Vec3(this.x, this.y);
    }

    add(vec2){
        this.x += vec2.x;
        this.y += vec2.y;
    }

    multiply(scalar){
        this.x *= scalar;
        this.y *= scalar;
    }

    cross(vec3){
        
    }
}
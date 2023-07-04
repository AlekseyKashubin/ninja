


class Ninja {
    constructor(name, health = 90, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(`hello my name is ${this.name}`)
    }
    showStats() {
        console.log(this.health, this.speed, this.strength)
    }
    dirnkSake() {
        this.strength += 10;
    }
}

const ninja1 = new Ninja('Aleksey')
ninja1.sayName();

ninja1.dirnkSake();
ninja1.showStats();



class Ninja {
    constructor(name, health = 90, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(`Hello you can call me ${this.name}`)
    }
    showStats() {
        console.log(`${this.name}'s stats are ${this.health} Health, ${this.speed} Speed and ${this.strength} Strength`)
    }
    dirnkSake() {
        this.strength += 10;
    }
}

class Sensei extends Ninja {
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10){
        super(name, health, speed, strength, wisdom)
        this.wisdom = wisdom;
    }
    speakWisdom(){
        console.log('Attitude is the "little" thing that makes a big difference.')
    }

}

const sensei1 = new Sensei('Master Bob')


const ninja1 = new Ninja('Aleksey')


sensei1.sayName();
sensei1.dirnkSake();
sensei1.showStats();
sensei1.speakWisdom();
import { Character } from './Character.js';

export class Cockroach extends Character {
    constructor(name, hp = 20, dmg = 1, mana = 0, specialAttackNeeds = 0, shield = 0) {
        super(name, hp, dmg, mana, specialAttackNeeds, shield);
    }

    eat() {
        if(this.mana >= this.specialAttackNeeds){
            this.hp += 1
            console.log(`${this.name}, lance Eat`)
            console.log(`${this.name} gagne 1hp`)
        }
    }
}
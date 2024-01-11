import { Character } from './Character.js';

export class Monk extends Character {
    constructor(name, hp = 8, dmg = 2, mana = 200, specialAttackNeeds = 25, shield = 0) {
        super(name, hp, dmg, mana, specialAttackNeeds, shield);
    }

    heal() {
        if(this.mana >= this.specialAttackNeeds){
            this.mana -= this.specialAttackNeeds
            this.hp += 8
            console.log(`${this.name}, lance Heal`)
            console.log(`${this.name} gagne 8hp`)
        }
    }
}
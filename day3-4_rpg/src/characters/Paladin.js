import { Character } from './Character.js';

export class Paladin extends Character {
    constructor(name, hp = 16, dmg = 3, mana = 160, specialAttackNeeds = 40, shield = 0) {
        super(name, hp, dmg, mana, specialAttackNeeds, shield);
    }

    healingLighting(victim) {
        if(this.mana >= this.specialAttackNeeds){
            this.mana -= this.specialAttackNeeds
            this.hp += 5
            console.log(`${this.name} gagne 5hp`)
            console.log(`${this.name}, lance Healing Lighting sur ${victim.name}`)
            victim.takeDamage(4)
        }
    }
}
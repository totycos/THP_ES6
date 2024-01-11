import { Character } from './Character.js';

export class Wizard extends Character {
    constructor(name, hp = 10, dmg = 2, mana = 200, specialAttackNeeds = 25, shield = 0) {
        super(name, hp, dmg, mana, specialAttackNeeds, shield);
    }

    fireball(victim) {
        if(this.mana >= this.specialAttackNeeds){
            this.mana -= this.specialAttackNeeds
            console.log(`${this.name}, lance Fireball sur ${victim.name}`)
            victim.takeDamage(7)
        }
    }
}
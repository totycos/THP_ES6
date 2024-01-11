import { Character } from './Character.js';

export class Fighter extends Character {
    constructor(name, hp = 12, dmg = 4, mana = 40, specialAttackNeeds = 20, shield = 0) {
        super(name, hp, dmg, mana, specialAttackNeeds, shield);
    }

    darkVision(victim) {
        if(this.mana >= this.specialAttackNeeds){
            this.mana -= this.specialAttackNeeds
            console.log(`${this.name}, lance Dark Vision sur ${victim.name}`)
            console.log(`${this.name} améliore sa defence pour ce tour`)
            victim.takeDamage(5)
            this.shield = 2
        }
    }
}
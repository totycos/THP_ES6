import { Character } from './Character.js';

export class Assassin extends Character {
    constructor(name, hp = 6, dmg = 6, mana = 20, specialAttackNeeds = 20, shield = 0) {
        super(name, hp, dmg, mana, specialAttackNeeds, shield);
    }

    shadowHit(victim) {
        if(this.mana >= this.specialAttackNeeds){
            this.mana -= this.specialAttackNeeds
            console.log(`${this.name}, lance Shadow Hit sur ${victim.name}`)
            console.log(`${this.name} améliore sa defence pour ce tour`)
            this.shield = 999
            victim.takeDamage(7)
            if(victim.hp > 0){
                this.takeDamage(7)
            }
        }
    }
}
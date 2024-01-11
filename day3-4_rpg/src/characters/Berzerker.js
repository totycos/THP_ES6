import { Character } from './Character.js';

export class Berzerker extends Character {
    constructor(name, hp = 8, dmg = 4, mana = 0, specialAttackNeeds = 0, shield = 0) {
        super(name, hp, dmg, mana, specialAttackNeeds, shield);
    }

    rage() {
        this.dmg += 1
        console.log(`${this.name}, lance Rage`)
        console.log(`${this.name} renforce sa force de 1 dommage}`)
        this.takeDamage(1)
    }
}
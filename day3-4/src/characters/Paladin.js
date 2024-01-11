import { Character } from './Character.js';

export class Paladin extends Character {
  constructor(name, hp = 16, dmg = 3, mana = 160) {
    super(name, hp, dmg, mana);
  }

  healingLighting(victim){
    this.mana -= 40
    this.hp += 5
    victim.hp -= 4
  }

}
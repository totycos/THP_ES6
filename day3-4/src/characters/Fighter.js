import { Character } from './Character.js';

export class Fighter extends Character {
  constructor(name, hp = 12, dmg = 4, mana = 40) {
    super(name, hp, dmg, mana);
  }

  darkVision(victim){
    this.mana -= 20
    victim.hp -= 5
    // Lors du prochain tour, il prendra 2 dégâts de moins par coup reçu.
  }

}
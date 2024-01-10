import { Character } from './Character.js';

export class Assassin extends Character {
  constructor(hp = 6, dmg = 6, mana = 20) {
    super(hp, dmg, mana);
  }

  shadowHit(victim){
    this.mana -= 20
    victim.hp -= 7
    // si l'adversaire n'est pas mort, l'assassin perdra 7 dégâts à son tour
    // Il ne  prends pas de dégâts lors du prochain tour
  }

}
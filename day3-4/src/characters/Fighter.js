import { Character } from './Character.js';

export class Fighter extends Character {
  constructor(hp = 12, dmg = 4, mana = 40) {
    super(hp, dmg, mana);
  }

}
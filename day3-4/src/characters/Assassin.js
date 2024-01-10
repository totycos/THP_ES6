import { Character } from './Character.js';

export class Assassin extends Character {
  constructor(hp = 6, dmg = 6, mana = 20) {
    super(hp, dmg, mana);
  }

}
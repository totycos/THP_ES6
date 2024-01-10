import { Character } from './Character.js';

export class Paladin extends Character {
  constructor(hp = 16, dmg = 3, mana = 160) {
    super(hp, dmg, mana);
  }

}
import { Character } from './Character.js';

export class Monk extends Character {
  constructor(hp = 8, dmg = 2, mana = 200) {
    super(hp, dmg, mana);
  }

}
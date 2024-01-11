import { Character } from './Character.js';

export class Monk extends Character {
  constructor(name, hp = 8, dmg = 2, mana = 200) {
    super(name, hp, dmg, mana);
  }

  heal(target){
    this.mana -= 25
    target.hp += 8
  }

}
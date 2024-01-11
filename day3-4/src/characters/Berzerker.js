import { Character } from './Character.js';

export class Berzerker extends Character {
  constructor(name, hp = 8, dmg = 4, mana = 0) {
    super(name, hp, dmg, mana);
  }

  rage(){
    this.dmg += 1
    this.hp -= 1
  }

}
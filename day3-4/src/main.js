import { Character } from './characters/Character.js';
import { Assassin } from './characters/Assassin.js';
import { Berzerker } from './characters/Berzerker.js';
import { Fighter } from './characters/Fighter.js';
import { Monk } from './characters/Monk.js';
import { Paladin } from './characters/Paladin.js';

const grace = new Fighter();
const ulder = new Paladin();
const moana = new Monk();
const draven = new Berzerker();
const carl = new Assassin();

console.log(grace)
console.log(ulder)
console.log(moana)
console.log(draven)
console.log(carl)

ulder.healingLighting(grace)
console.log(grace)
console.log(ulder)
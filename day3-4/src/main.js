import { Assassin } from './characters/Assassin.js';
import { Berzerker } from './characters/Berzerker.js';
import { Fighter } from './characters/Fighter.js';
import { Monk } from './characters/Monk.js';
import { Paladin } from './characters/Paladin.js';

import { Game } from './Game.js';


const player1 = new Fighter('Grace');
const player2 = new Paladin('Ulder');
const player3 = new Monk('Moana');
const player4 = new Berzerker('Draven');
const player5 = new Assassin('Carl');

console.log('#### FIGHTER ####')
console.log(player1)
console.log(player2)
console.log(player3)
console.log(player4)
console.log(player5)
console.log('##### GAME #####')
const game1 = new Game();
console.log(game1)
    game1.skipTurn()
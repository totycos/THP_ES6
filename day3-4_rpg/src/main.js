import { Assassin } from './characters/Assassin.js';
import { Berzerker } from './characters/Berzerker.js';
import { Fighter } from './characters/Fighter.js';
import { Monk } from './characters/Monk.js';
import { Paladin } from './characters/Paladin.js';
import { Wizard } from './characters/Wizard.js';
import { Cockroach } from './characters/Cockroach.js';

import { Game } from './Game.js';


startGame()

function startGame() {
    const game = new Game();
    game.playGame()
}




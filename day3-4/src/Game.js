import { Assassin } from './characters/Assassin.js';
import { Berzerker } from './characters/Berzerker.js';
import { Fighter } from './characters/Fighter.js';
import { Monk } from './characters/Monk.js';
import { Paladin } from './characters/Paladin.js';

export class Game {
    constructor(turnLeft) {
      this.turnLeft = 10;
    }

    skipTurn(){
        if(this.turnLeft > 0){
            this.turnLeft -= 1
            console.log(`Il reste ${this.turnLeft} tours.`)
            console.log('#################')
        }
        else{
            console.log("Il n'y a plus de tours à jouer, la partie est terminée." )
        }
    }

    startTurn(){
        console.log(`It's turn ${this.turnLeft}`)
    }
  
    
  }
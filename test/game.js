import { Fighter, Paladin, Monk, Berzerker, Assassin } from './character.js';

class Game {
    constructor(turnLeft) {
        this.turnLeft = 10;
        this.players = [
            new Fighter('Grace'),
            new Paladin('Ulder'),
            new Monk('Moana'),
            new Berzerker('Draven'),
            new Assassin('Carl')
        ]
    }

    playGame(){
        console.log('##### GAME #####')
        console.log('Players :')
        console.log(this.players)
        while(this.turnLeft > 0 && this.playersAlive().length > 1){
            this.startTurn()
        }
        this.gameFinished()
    }

    skipTurn() {
        if (this.turnLeft > 0) {
            this.turnLeft -= 1
            console.log(`Il reste ${this.turnLeft} tours.`)
            console.log('#################')
        }
        else {
            this.gameFinished()
        }
    }

    startTurn() {
        console.log(`---- TURN ${this.turnLeft} ----`)
        console.log('-----------------')
        this.watchStats()
        // Select characters still alive
        let playersToPlayLeft = this.playersAlive()
        // If there is at least 1 player to play still
        while(playersToPlayLeft.length > 0 && this.playersAlive().length > 1){
            //console.log(playersToPlayLeft.length)
            // Choose a random player
            let randomIndex = Math.floor(Math.random() * playersToPlayLeft.length);
            let randomPlayer = playersToPlayLeft[randomIndex];
            this.playerPlay(randomPlayer)
            // remove the player from the players to play list
            playersToPlayLeft.splice(randomIndex,1) 
            
        }
        console.log('Tous les joueur ont joués, le tour est fini')
        this.skipTurn()
    }

    playersAlive(){
        return this.players.filter(player => player.status == 'playing')
    }

    playerPlay(player){
        console.log(`${player.name}, c'est ton tour de jouer`)
        // Generate a random number for a random attack (<0.5 : classic attack, >=0.5 : special attack)
        let randomAttack = Math.random()
        //console.log(randomAttack)
        // Generate a random number for a random victim (between the player still alive)
        let randomVictimIndex = Math.floor(Math.random() * this.playersAlive().length)
        //console.log(randomVictimIndex)
        randomVictimIndex = randomVictimIndex > 0 ? randomVictimIndex - 1 : randomVictimIndex // -1 because arrays start at 0
        // Get the ennemies list
        let ennemies = this.playersAlive().filter(p => p.name !== player.name);
        //console.log(ennemies.length)
        // Attack
        //console.log(`[Player mana : ${player.mana}]`)
        //console.log(`[Special attack needs : ${player.specialAttackNeeds}]`)
        if(randomAttack < 0.5 && player.mana >= player.specialAttackNeeds){
            if(player.constructor.name === 'Fighter'){
                player.darkVision(ennemies[randomVictimIndex])
            }
            else if(player.constructor.name === 'Paladin'){
                player.healingLighting(ennemies[randomVictimIndex])
            }
            else if(player.constructor.name === 'Monk'){
                player.heal()
            }
            else if(player.constructor.name === 'Berzerker'){
                player.rage(ennemies[randomVictimIndex])
            }
            else if(player.constructor.name === 'Assassin'){
                player.shadowHit(ennemies[randomVictimIndex])
            }
        }
        else{
            player.dealDamage(ennemies[randomVictimIndex])
        }
        console.log('-----------------')
    }

    watchStats(){
        console.log('** Players status : **')
        this.players.forEach(player => {
            console.log(`Name: ${player.name}, hp: ${player.hp}, dmg: ${player.dmg}, mana: ${player.mana}, status: ${player.status}`);
          });
          console.log('-----------------')
    }

    gameFinished(){
        // Make winners list
        const winners = this.players.filter(player => player.status == 'playing').map(player => {return { ...player, status: 'winner' };})
        const winnersNames = winners.map(winner => winner.name)
        console.log('### FINISHED ###')
        if(this.playersAlive().length > 1){
            console.log("Il n'y a plus de tours à jouer, la partie est terminée.")
            console.log(`GAGNANTS : ${winnersNames.join(", ")}`)
        }
        else{
            console.log("Il n'y a plus qu'un survivant")
            console.log(`GAGNANT : ${winnersNames.join(", ")}`)
        }
    }
}

function startGame(){
    const game = new Game();
game.playGame()
}

startGame()
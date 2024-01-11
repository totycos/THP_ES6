import { Assassin } from './characters/Assassin.js';
import { Berzerker } from './characters/Berzerker.js';
import { Fighter } from './characters/Fighter.js';
import { Monk } from './characters/Monk.js';
import { Paladin } from './characters/Paladin.js';
import { Wizard } from './characters/Wizard.js';
import { Cockroach } from './characters/Cockroach.js';

export class Game {
    constructor(turnLeft) {
        this.turnLeft = 10;
        this.availableClasses = [Fighter, Paladin, Monk, Berzerker, Assassin, Wizard, Cockroach];
        this.players = [];
        // Define number of players
        let numberOfPlayers = window.prompt('Combien de players pour cette partie ?', 'Choissis un chiffre entre 2 et 8');
        while(!(numberOfPlayers == 2 || numberOfPlayers == 3 || numberOfPlayers == 4)){
            if (attack === null) {
                // stop loop if ESC is pressed
                break;
            }
            numberOfPlayers = window.prompt('Combien de players pour cette partie ?', 'Choissis un chiffre entre 2 et 8');
        }
        // Generate players
        for (let i = 0; i < numberOfPlayers; i++) {
            const randomIndex = Math.floor(Math.random() * this.availableClasses.length);
            const randomClass = this.availableClasses[randomIndex];
            this.players.push(new randomClass(generateRandomName()));
        }
    }

    playGame() {
        console.log('##### GAME #####')
        console.log('Players :')
        console.log(this.players)
        while (this.turnLeft > 0 && this.playersAlive().length > 1) {
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
        console.log(`---- TURN ${11 - this.turnLeft} ----`)
        console.log('-----------------')
        this.watchStats()
        // Select characters still alive
        let playersToPlayLeft = this.playersAlive()
        // If there is at least 1 player to play still
        while (playersToPlayLeft.length > 0 && this.playersAlive().length > 1) {
            //console.log(playersToPlayLeft.length)
            // Choose a random player
            let randomIndex = Math.floor(Math.random() * playersToPlayLeft.length);
            let randomPlayer = playersToPlayLeft[randomIndex];
            this.playerPlay(randomPlayer)
            // remove the player from the players to play list
            playersToPlayLeft.splice(randomIndex, 1)

        }
        console.log('Tous les joueur ont joués, le tour est fini')
        this.resetShields()
        this.skipTurn()
    }

    playersAlive() {
        return this.players.filter(player => player.status == 'playing')
    }

    playerPlay(player) {
        console.log(`${player.name}, c'est ton tour de jouer`)
        // Generate a random number for a random attack (<0.5 : classic attack, >=0.5 : special attack)
        let randomAttack = Math.random()
        let attack = window.prompt('QUE VEUX TU FAIRE :\n1 : Attaquer \n2 : Utiliser ton coup spécial \n3 : Voir stats des joueurs \nESC : Quitter la partie', 'Tape un chiffre entre 1 et 2 ou ESC pour quitter');
        while(attack != 1 && attack != 2){
            if(attack == 3){
                this.watchStats()
            }
            else if (attack === null) {
                // stop loop if ESC is pressed
                break;
            }
            attack = window.prompt('QUE VEUX TU FAIRE :\n1 : Attaquer \n2 : Utiliser ton coup spécial \n3 : Voir stats des joueurs \nESC : Quitter la partie', 'Tape un chiffre entre 1 et 2 ou ESC pour quitter');
        }
        //console.log(randomAttack)
        // Generate a random number for a random victim (between the player still alive)
        let randomVictimIndex = Math.floor(Math.random() * this.playersAlive().length)
        //console.log(`[Random Victim index : ${randomVictimIndex}]`)
        randomVictimIndex = randomVictimIndex > 0 ? randomVictimIndex - 1 : randomVictimIndex // -1 because arrays start at 0
        // Get the enemies list
        let enemies = this.playersAlive().filter(p => p.name !== player.name);
        // console.log(enemies)
        //console.log(`[Enemies number : ${enemies.length}`)
        let enemiesListPrompt = enemies
            .map((ennemy, index) => `${index + 1} : ${ennemy.name}`)
            .join(' \n ');
        let selectedEnnemy = window.prompt(`QUI VEUX TU ATTAQUER ?\n ${enemiesListPrompt} \nESC : Quitter la partie`, `Tape un chiffre entre 1 et ${enemies.length} ou ESC pour quitter`) - 1;
        //console.log(selectedEnnemy)
        // Attack
        //console.log(`[Player mana : ${player.mana}]`)
        //console.log(`[Special attack needs : ${player.specialAttackNeeds}]`)
        if(attack == 2 && player.mana >= player.specialAttackNeeds) {
            if (player.constructor.name === 'Fighter') {
                player.darkVision(enemies[selectedEnnemy])
            }
            else if (player.constructor.name === 'Paladin') {
                player.healingLighting(enemies[selectedEnnemy])
            }
            else if (player.constructor.name === 'Monk') {
                player.heal()
            }
            else if (player.constructor.name === 'Berzerker') {
                player.rage()
            }
            else if (player.constructor.name === 'Assassin') {
                player.shadowHit(enemies[selectedEnnemy])
            }
            else if (player.constructor.name === 'Wizard') {
                player.fireball(enemies[selectedEnnemy])
            }
            else if (player.constructor.name === 'Cockroach') {
                player.eat(enemies[selectedEnnemy])
            }
        }
        else if(attack == 2 && player.mana <= player.specialAttackNeeds){
            console.log(`${player.name} n'a plus assez de mana pour lancer son coup special`)
            console.log(`${player.name} attaque simplement`)
            player.dealDamage(enemies[selectedEnnemy])
        }
        else {
            player.dealDamage(enemies[selectedEnnemy])
        }
        console.log('-----------------')
    }

    resetShields() {
        this.players.forEach(player => {
            player.shield = 0;
        });
    }

    watchStats() {
        console.log('** Players status : **')
        this.players.forEach(player => {
            console.log(`Name: ${player.name}, hp: ${player.hp}, dmg: ${player.dmg}, mana: ${player.mana}, status: ${player.status}`);
        });
        console.log('-----------------')
    }

    gameFinished() {
        // Make winners list
        const winners = this.players.filter(player => player.status == 'playing').map(player => { return { ...player, status: 'winner' }; })
        const winnersNames = winners.map(winner => winner.name)
        console.log('### FINISHED ###')
        if (this.playersAlive().length > 1) {
            console.log("Il n'y a plus de tours à jouer, la partie est terminée.")
            console.log(`GAGNANTS : ${winnersNames.join(", ")}`)
        }
        else {
            console.log("Il n'y a plus qu'un survivant")
            console.log(`GAGNANT : ${winnersNames.join(", ")}`)
        }
    }
}

function generateRandomName() {
    const names = [
        'Abel', 'Adèle', 'Alexandre', 'Alice', 'Arthur', 'Aurélie', 'Benjamin', 'Camille', 'Charlotte', 'Clément',
        'Constance', 'Damien', 'Éléonore', 'Étienne', 'Emma', 'Enzo', 'Estelle', 'Ethan', 'Éva', 'Félix',
        'Gabriel', 'Garance', 'Guillaume', 'Hugo', 'Inès', 'Isaac', 'Jeanne', 'Jules', 'Juliette', 'Léa',
        'Léo', 'Lola', 'Louis', 'Louise', 'Lucas', 'Luna', 'Mael', 'Manon', 'Margaux', 'Maxime', 'Mia',
        'Nathan', 'Noah', 'Olivia', 'Oscar', 'Paul', 'Pénélope', 'Raphaël', 'Romane', 'Sacha', 'Sarah',
        'Simon', 'Sophie', 'Théo', 'Tom', 'Valentin', 'Victoria', 'Victor', 'Yann', 'Zoé', 'Adam', 'Anaïs',
        'Antoine', 'Astrid', 'Axel', 'Émilie', 'Émile', 'Elena', 'Éliane', 'Élie', 'Elise', 'Eloïse',
        'Émilien', 'Émilie', 'Étienne', 'Flavie', 'Frédéric', 'Gabin', 'Gwendoline', 'Ivan', 'Julien', 'Justine',
        'Kilian', 'Laurent', 'Léandre', 'Lina', 'Lou', 'Lucie', 'Lydia', 'Maël', 'Manuel', 'Mathilde',
        'Nadia', 'Nathan', 'Nina', 'Noah', 'Nora', 'Nolan', 'Nathalie', 'Nancy', 'Naomi', 'Nikki',
        'Oliver', 'Olivia', 'Oscar', 'Octavia', 'Owen', 'Odette', 'Omar', 'Ophelia', 'Olivier', 'Odin',
        'Pamela', 'Parker', 'Penelope', 'Patrick', 'Paige', 'Paul', 'Pearl', 'Peter', 'Priscilla', 'Phoebe',
        'Quentin', 'Queenie', 'Quincy', 'Quinn', 'Quintin', 'Quiana', 'Quenby', 'Quillan', 'Quincey', 'Quinlan',
        'Rachel', 'Rebecca', 'Ryan', 'Riley', 'Rose', 'Robert', 'Regina', 'Richard', 'Ruth', 'Ramona',
        'Samuel', 'Sophia', 'Sebastian', 'Sarah', 'Samantha', 'Simon', 'Savannah', 'Seth', 'Selena', 'Shane',
        'Tristan', 'Tessa', 'Theodore', 'Tiffany', 'Thomas', 'Tabitha', 'Taylor', 'Timothy', 'Tara', 'Tyler',
        'Ulysses', 'Uma', 'Uriel', 'Ursula', 'Upton', 'Ulric', 'Una', 'Umberto', 'Unity', 'Ugo',
        'Valentina', 'Victor', 'Violet', 'Vincent', 'Vivian', 'Vanessa', 'Vaughn', 'Veronica', 'Vance', 'Victoria',
        'Winston', 'Willow', 'Wesley', 'Wendy', 'Walter', 'Winona', 'Wyatt', 'Wanda', 'Wayne', 'Winnie',
        'Xander', 'Xena', 'Xavier', 'Ximena', 'Xanthe', 'Xaviera', 'Xander', 'Xylon', 'Xara', 'Xia',
        'Yasmine', 'Yannick', 'Yvette', 'Yosef', 'Yara', 'Yuri', 'Yvonne', 'Yolanda', 'Yannis', 'Yelena',
        'Zane', 'Zara', 'Zachary', 'Zoe', 'Zander', 'Zelda', 'Zephyr', 'Zara', 'Zayden', 'Zena'
    ];
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}



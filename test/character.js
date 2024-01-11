class Character {
    constructor(name, hp, dmg, mana, specialAttackNeeds, status) {
        this.name = name;
        this.hp = hp;
        this.dmg = dmg;
        this.mana = mana
        this.specialAttackNeeds = specialAttackNeeds
        this.status = "playing"
    }

    takeDamage(dmg) {
        if(this.hp > 0){
            console.log(`${this.name} perd ${dmg}hp`)
            this.hp -= dmg
            this.isDead()
        }
        else{
            console.log(`${this.name} est déjà mort`)
        }
    }

    dealDamage(victim) {
        console.log(`${this.name} attaque ${victim.name}`)
        victim.takeDamage(this.dmg)
        if(victim.status === 'loser'){
            this.mana += 20
        }
    }

    isDead(){
        if(this.hp <= 0){
            console.log(`${this.name} est mort`)
            this.status = 'loser'
        }
    }
}

export class Fighter extends Character {
    constructor(name, hp = 12, dmg = 4, mana = 40, specialAttackNeeds = 20) {
        super(name, hp, dmg, mana, specialAttackNeeds);
    }

    darkVision(victim) {
        if(this.mana >= this.specialAttackNeeds){
            this.mana -= this.specialAttackNeeds
            console.log(`${this.name}, lance Dark Vision sur ${victim.name}`)
            victim.takeDamage(5)
            // console.log(Game.turnLeft)
            // Lors du prochain tour, il prendra 2 dégâts de moins par coup reçu.
        }
    }
}

export class Paladin extends Character {
    constructor(name, hp = 16, dmg = 3, mana = 160, specialAttackNeeds = 40) {
        super(name, hp, dmg, mana, specialAttackNeeds);
    }

    healingLighting(victim) {
        if(this.mana >= this.specialAttackNeeds){
            this.mana -= this.specialAttackNeeds
            this.hp += 5
            console.log(`${this.name} gagne 5hp`)
            console.log(`${this.name}, lance Healing Lighting sur ${victim.name}`)
            victim.takeDamage(4)
        }
    }
}

export class Berzerker extends Character {
    constructor(name, hp = 8, dmg = 4, mana = 0, specialAttackNeeds = 0) {
        super(name, hp, dmg, mana, specialAttackNeeds);
    }

    rage() {
        this.dmg += 1
        console.log(`${this.name}, lance Rage`)
        console.log(`${this.name} renforce sa force de 1 dommage}`)
        this.takeDamage(1)
    }
}

export class Monk extends Character {
    constructor(name, hp = 8, dmg = 2, mana = 200, specialAttackNeeds = 25) {
        super(name, hp, dmg, mana, specialAttackNeeds);
    }

    heal() {
        if(this.mana >= this.specialAttackNeeds){
            this.mana -= this.specialAttackNeeds
            this.hp += 8
            console.log(`${this.name}, lance Heal`)
            console.log(`${this.name} gagne 8hp`)
        }
    }
}

export class Assassin extends Character {
    constructor(name, hp = 6, dmg = 6, mana = 20, specialAttackNeeds = 20) {
        super(name, hp, dmg, mana, specialAttackNeeds);
    }

    shadowHit(victim) {
        if(this.mana >= this.specialAttackNeeds){
            this.mana -= this.specialAttackNeeds
            victim.hp -= 7
            console.log(`${this.name}, lance Shadow Hit sur ${victim.name}`)
            victim.takeDamage(7)
            if(victim.hp > 0){
                this.takeDamage(7)
            }
            // Il ne  prends pas de dégâts lors du prochain tour
        }
    }
}







class Character {
    constructor(name, hp, dmg, mana, specialAttackNeeds, shield, status) {
        this.name = name;
        this.hp = hp;
        this.dmg = dmg;
        this.mana = mana
        this.specialAttackNeeds = specialAttackNeeds
        this.shied = shield
        this.status = "playing"
    }

    takeDamage(dmg) {
        if(this.hp > 0){
            if(this.shield > 0 && dmg - this.shield > 0){
                console.log(`${this.name}, se protège et perd ${dmg - this.shield}hp`)
                this.hp -= dmg - this.shield
            }
            else if(this.shield > 0 && dmg - this.shield <= 0){
                console.log(`${this.name}, se protège et ne perd pas de hp`)
            }
            else{
                console.log(`${this.name} perd ${dmg}hp`)
                this.hp -= dmg
            }
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
    constructor(name, hp = 12, dmg = 4, mana = 40, specialAttackNeeds = 20, shield = 0) {
        super(name, hp, dmg, mana, specialAttackNeeds, shield);
    }

    darkVision(victim) {
        if(this.mana >= this.specialAttackNeeds){
            this.mana -= this.specialAttackNeeds
            console.log(`${this.name}, lance Dark Vision sur ${victim.name}`)
            console.log(`${this.name} améliore sa defence pour ce tour`)
            victim.takeDamage(5)
            this.shield = 2
        }
    }
}

export class Paladin extends Character {
    constructor(name, hp = 16, dmg = 3, mana = 160, specialAttackNeeds = 40, shield = 0) {
        super(name, hp, dmg, mana, specialAttackNeeds, shield);
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
    constructor(name, hp = 8, dmg = 4, mana = 0, specialAttackNeeds = 0, shield = 0) {
        super(name, hp, dmg, mana, specialAttackNeeds, shield);
    }

    rage() {
        this.dmg += 1
        console.log(`${this.name}, lance Rage`)
        console.log(`${this.name} renforce sa force de 1 dommage}`)
        this.takeDamage(1)
    }
}

export class Monk extends Character {
    constructor(name, hp = 8, dmg = 2, mana = 200, specialAttackNeeds = 25, shield = 0) {
        super(name, hp, dmg, mana, specialAttackNeeds, shield);
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
    constructor(name, hp = 6, dmg = 6, mana = 20, specialAttackNeeds = 20, shield = 0) {
        super(name, hp, dmg, mana, specialAttackNeeds, shield);
    }

    shadowHit(victim) {
        if(this.mana >= this.specialAttackNeeds){
            this.mana -= this.specialAttackNeeds
            console.log(`${this.name}, lance Shadow Hit sur ${victim.name}`)
            console.log(`${this.name} améliore sa defence pour ce tour`)
            this.shield = 999
            victim.takeDamage(7)
            if(victim.hp > 0){
                this.takeDamage(7)
            }
        }
    }
}

export class Wizard extends Character {
    constructor(name, hp = 10, dmg = 2, mana = 200, specialAttackNeeds = 25, shield = 0) {
        super(name, hp, dmg, mana, specialAttackNeeds, shield);
    }

    fireball(victim) {
        if(this.mana >= this.specialAttackNeeds){
            this.mana -= this.specialAttackNeeds
            console.log(`${this.name}, lance Fireball sur ${victim.name}`)
            victim.takeDamage(7)
        }
    }
}

export class Cockroach extends Character {
    constructor(name, hp = 20, dmg = 1, mana = 0, specialAttackNeeds = 0, shield = 0) {
        super(name, hp, dmg, mana, specialAttackNeeds, shield);
    }

    eat() {
        if(this.mana >= this.specialAttackNeeds){
            this.hp += 1
            console.log(`${this.name}, lance Eat`)
            console.log(`${this.name} gagne 1hp`)
        }
    }
}







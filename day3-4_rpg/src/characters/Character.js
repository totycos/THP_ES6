export class Character {
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




















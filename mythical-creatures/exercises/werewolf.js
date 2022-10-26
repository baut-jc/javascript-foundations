class Werewolf {
    constructor(name){
        this.name = name
        this.form = 'human'
        this.hungry = false
    }
    completeTransformation() {
        if (this.form === 'wolf' && this.hungry === true) { 
            this.form = 'human'
            this.hungry = false
            return 'Where are I?'
        } else {
            this.form = 'wolf'
            this.hungry = true
            return 'Aaa-Woooo!'
        }
    }
    eatVictim(newVictim) {
        if (this.form === 'human') {
            return `No way am I eating ${newVictim.name}, I'd like a burger!`
        } else {
            newVictim.alive = false
            this.form = 'human'
            return `Yum, ${newVictim.name} was delicious.`
        }
    }

//conditionals ALWAYS have two or more outcomes. It states a true statement using strictlies...
}

module.exports = Werewolf;
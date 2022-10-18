class Pirate {
    constructor(name, job) {
        this.name = name
        this.job = job || 'scallywag'
        this.cursed = false
        this.booty = 0
    }
    robShip() {
        this.booty += 100
        if (this.booty > 500) { //returns 600 
            this.booty
            this.cursed = true
            return 'ARG! I\'ve been cursed!'
        } else {
        return 'YAARRR!'
        }
    }
}


module.exports = Pirate
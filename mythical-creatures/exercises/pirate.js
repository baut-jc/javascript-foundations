class Pirate {
    constructor(name, job) {
        this.name = name
        this.job = job || 'scallywag'
        this.cursed = false
        this.booty = 0
        this.rob = 0 //new var to count for robShip function
    }
    robShip() {
        // if (this.booty <= 500) { //returns 600 
        if (this.booty >= 500) {
            this.cursed = true
            return 'ARG! I\'ve been cursed!'
        }
        this.booty += 100
        return 'YAARRR!'
    }
        
}


module.exports = Pirate
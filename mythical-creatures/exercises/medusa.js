var Person = require('./person');
var Statue = require('./statue');

class Medusa {
    constructor(name) {
        this.name = name
        this.statues = []
    }
    gazeAtVictim(victim) { 
        var newStatue = new Statue(victim.name) //pass in person name
        //limit the array.length to 3
        if (this.statues.length >= 3) {
            this.statues.splice(0, 1) //remove the first victim
            this.statues.length
            console.log(this.statues)
            // this.statues.push(newStatue)
        } else {
            this.statues.push(newStatue) //push to array.length = 3
        }
        console.log(Medusa.statues)
    }
}

module.exports = Medusa;
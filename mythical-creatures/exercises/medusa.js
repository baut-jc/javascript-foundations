var Person = require('./person');
var Statue = require('./statue');

class Medusa {
    constructor(name) {
        this.name = name
        this.statues = []
    }
    gazeAtVictim(newVictim) { 
        var newStatue = new Statue(newVictim.name) //pass in person name
        //limit the array.length to 3
        //if there's more than 3 then will remove an element in array.
        this.statues.push(newStatue) //push to array.length = 3
        if (this.statues.length >= 4) {
            this.statues.shift() //remove the first victim
            // console.log('how many elements?', this.statues.length)
        }
    }
}

module.exports = Medusa;


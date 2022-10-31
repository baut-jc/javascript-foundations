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
        //if there's more than 3 then will remove an element in array. if (this.statues.length < 3) {
        if (this.statues.length < 3) {
            this.statues.push(newStatue) //push to array.length = 3
        } else {
            this.statues.push(newStatue) 
            var freedPerson = new Person(this.statues[0].name, 'relieved')
            // freedPerson.mood = "relieved"
            this.statues.shift() //remove the first victim // splice will take an element out.
            return freedPerson
        }
    }
}

module.exports = Medusa;


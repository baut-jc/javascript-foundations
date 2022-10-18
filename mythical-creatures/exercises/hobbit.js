class Hobbit {
    constructor(shirePeople) {
        this.name = shirePeople.name
        this.age = 0
        this.adult = false
    }
    celebrateBirthday() {
        this.age++
        if(this.age > 32) {
            return this.adult
        }
    }
}

module.exports = Hobbit
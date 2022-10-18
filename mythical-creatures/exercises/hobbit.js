class Hobbit {
    constructor(shirePeople) {
        this.name = shirePeople.name
        this.age = 0
        this.adult = false
        this.old = false
        this.hasRing = false
    }
    celebrateBirthday() {
        this.age++
        if (this.age > 32) {
            this.old = false
            this.adult = true
        } if (this.age > 100) { //why is it that if i put "else if," it returns false rather, it passes with just an "if"?
            return this.old = true
        }
    }
    getRing() {
        if(this.name === 'Frodo') {
            this.hasRing = true
            return 'Here is the ring!'
        } else {
            return 'You can\'t have it!'
        }
    }
}

module.exports = Hobbit
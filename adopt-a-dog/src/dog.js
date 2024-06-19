class Dog {
  constructor(doggo) {
    this.name = doggo.name
    this.age = doggo.age
    this.energyLevel = 5
    this.hungry = true
    this.friends = []
  }
  eat() {
    if (this.hungry === false) {
      return 'I refuse to eat.'
    } else {
      this.hungry = false
      return 'Yum!'
    }
  }
  fetchBall() {
    //this.energy > 3
    if (this.energyLevel > 3) {
      this.energyLevel -= 1
      return 'This is fun!'
    } else {
      return 'Nah, I\'m going to sleep instead.'
    }
  }
  sleep() {
      if (this.energyLevel >= 10) {
        return 'I have too much energy to rest. I\'m going to chew something instead.'
      }
      this.energyLevel ++
  }
  makeNewFriend(pawFriend) {
    this.friends.push(pawFriend.name)
  }
}

module.exports = Dog;

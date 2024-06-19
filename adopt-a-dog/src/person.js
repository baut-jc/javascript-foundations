var Dog = require("./dog.js");

class Person {
  constructor(name, dog) {
    this.name = name
    this.dog = dog
  }
  fillFoodBowl() {
    this.dog.hungry = false
  }
  throwBall() {
    this.dog.fetchBall()
    // this.dog.energyLevel --
    return `${this.dog.name} loves playing fetch!`
  }
  introduceNewFriends(pawFriend) {
    this.dog.makeNewFriend(pawFriend)
    // this.dog.friends.push(pawFriend.name)
  }
  adoptAPup(pupperName, pupperAge) {
    if (this.dog === undefined) { //(!this.dog) --> falsy statement 
      var pupper = new Dog({name: pupperName, age: pupperAge})
      this.dog = pupper
    }
  return `You can\'t adopt ${pupperName}. You already have ${this.dog.name}!`
  }

}

module.exports = Person;

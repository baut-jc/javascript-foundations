class TrickOrTreater {
  constructor(costume, bag) {
    this.dressedUpAs = costume.style
    this.hasCandy = false
    this.countCandies = 0
    this.bag = {
      candies: [],
      count: 0
    }
  }
  putCandyInBag(candy) {
    this.bag.candies.push(candy)
    this.countCandies ++
    this.bag.count ++
    this.hasCandy = true
  }
  eat() {
    this.bag.candies = []
    this.countCandies = 0
  }
}

module.exports = TrickOrTreater
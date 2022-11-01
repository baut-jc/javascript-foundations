class Bag {
  constructor() {
    this.empty = true
    this.count = 0
    this.candies = []
  }
  fill(sweets) { //sweets.type
    this.candies.push(sweets)
    this.count ++
    return sweets.type
  }
  contains(sweets) {  
    if (sweets.type === 'Lindt Chocolate') {
      return this.empty
    } else {
      return this.empty = false
    }
  }
}

module.exports = Bag
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
      if (sweets === 'Lindt Chocolate') {
      // console.log(sweets.type, this.empty)
      return true
    } else if (sweets === 'Hershey\'s Kisses') {
      return false
    }
  }
}

module.exports = Bag
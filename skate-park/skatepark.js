class SkatePark {
  constructor (spot) {
    this.name = spot.name
    this.yearFounded = spot.year
    this.style = spot.type
    this.features = spot.features
    this.isPrivate = false
  }
}

module.exports = SkatePark
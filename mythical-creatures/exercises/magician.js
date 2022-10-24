class Magician{
  constructor (obj){
    this.name = `The Great ${obj.name}`
    // console.log(obj,obj.name)
    this.assistant = obj.assistant
    this.favoriteAccessory = obj.clothing ||'top hat'
    this.confidencePercentage = 10
  }
performIncantation(word){
    var capWord = word
    capWord = capWord.toUpperCase()
    return `${capWord}!`
}
performTrick(){
    // console.log('what is this:', this.favoriteAccessory)
    this.confidencePercentage += 10
    if (this.favoriteAccessory === 'top hat') {
        return 'PULL RABBIT FROM TOP HAT'
    } else {
        return 'PULL DOVE FROM SLEEVE'
    }
}
performShowStopper() {
    if (this.confidencePercentage >= 110) { //this.confidence starts at 10 and will be * 10 when invoking the performTrick method
        return 'WOW! The magician totally just sawed that person in half!'
    } else {
        return 'Oh no, this trick is not ready!'
    }
}

}


module.exports = Magician
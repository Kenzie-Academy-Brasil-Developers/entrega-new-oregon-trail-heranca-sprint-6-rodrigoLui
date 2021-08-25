const Traveler  = require("./Traveler");

class Hunter extends Traveler {

    constructor (name, food, isHealthy) {
        super(name, food, isHealthy)
    }

    hunt () {
        this.food+= 5
    }

    eat () {
        if (this.food > 0) {
            this.food-= 2
        } else if (this.food === 0) {
            this.food = 0
            this.isHealthy = false
        }
    }

    giveFood(traveler, numOfUnits) {
        if (this.food >= numOfUnits) {
            traveler.food+= numOfUnits
            this.food-= numOfUnits
        }
    }
}

module.exports = Hunter;
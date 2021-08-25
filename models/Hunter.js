const Traveler  = require("./Traveler");

class Hunter extends Traveler {

    constructor (name, food, isHealthy) {
        super(name)
        this.isHealthy = isHealthy
        this.food = food
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

// const eu = new Traveler('Rodrigo', true, 0)

// const euCacador = new Hunter('Rugal', 5, true)
// console.log(euCacador)


// euCacador.giveFood(eu, 5)

// console.log(euCacador)
// console.log(eu)

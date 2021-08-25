const Traveler  = require("./Traveler");

class Hunter extends Traveler {

    constructor (name, isHealthy, amountFood) {
        super(name)
        this.isHealthy = isHealthy
        this.amountFood = amountFood
    }

    hunt () {
        this.amountFood+= 5
    }

    eat () {
        if (this.amountFood > 0) {
            this.amountFood-= 2
        } else {
            this.amountFood = 0
            this.isHealthy = false
        }
    }
    giveFood(traveler, numOfFoodUnits){
            
    }
}

module.exports = Hunter;

const eu = new Traveler('Rodrigo', true, 0)
const euCacador = new Hunter('Rugal', 5, true)
console.log(euCacador.giveFood(eu))
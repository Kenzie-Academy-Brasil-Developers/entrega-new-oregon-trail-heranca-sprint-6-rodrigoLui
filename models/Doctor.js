const Traveler  = require("./Traveler");

class Doctor extends Traveler {
    constructor (name, amountFood, isHealthy) {
        super(name)
        this.amountFood = amountFood
        this.isHealthy = isHealthy
    }

    heal(traveler) {
        traveler.isHealthy = true
    }
}

module.exports = Doctor;
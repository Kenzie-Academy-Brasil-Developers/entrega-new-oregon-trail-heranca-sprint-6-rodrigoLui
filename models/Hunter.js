const Traveler  = require("./Traveler");


class Hunter extends Traveler {

    constructor (name) {
        super(name)
        this.amountFood = 2
        this.isHealthy = true
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
}
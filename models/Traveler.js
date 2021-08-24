class Traveler {
    constructor (name) {
        this.name = name
        this.amountFood = 1
        this.isHealthy = true
    }

    hunt () {
        this.amountFood+= 2
    }

    eat () {
        if (this.amountFood > 0) {
            this.amountFood--
        } else {
            this.amountFood = 0
            this.isHealthy = false
        }
    }
}

module.exports = Traveler;
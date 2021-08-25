class Traveler {
    
    constructor (name, isHealthy, food) {
        this.name = name
        this.isHealthy = isHealthy
        this.food = food
    }

    hunt () {
        this.food+= 2
    }

    eat () {
        if (this.food > 0) {
            this.food--
        } else {
            this.food = 0
            this.isHealthy = false
        }
    }
}

module.exports = Traveler;
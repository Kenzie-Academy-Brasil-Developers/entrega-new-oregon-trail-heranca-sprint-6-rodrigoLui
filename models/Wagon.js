const Traveler = require("./Traveler")

class Wagon {
    
    constructor (capacity) {
        this.capacity = capacity
        this.passengers = new Array
    }

    getAvailableSeatCount () {            
        return this.capacity - this.passengers.length
    }

    join (hero) {
        if (this.capacity - this.passengers.length > 0) {
            this.passengers.push(hero)
        }
    }

    shouldQuarantine () {
        for (let i = 0; i < this.passengers.length; i++) {

            if (this.passengers[i].isHealthy === 'false') {
                this.passengers[i].isHealthy = false
            }
            if (this.passengers[i].isHealthy === 'true') {
                this.passengers[i].isHealthy = true
            }

            if (this.passengers[i].isHealthy === false) {
                return true
            } 
        }
        return false
    }

    totalFood () {
        let totFood = 0
        for (let i = 0; i < this.passengers.length; i++) {
                
            let quantFood = Number(this.passengers[i].food)
            totFood+=quantFood
        }
        return totFood
    }
}

module.exports = Wagon;
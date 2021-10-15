const {bag} = require("./bag")

class Passenger {
    constructor(name, passportNumber, seatNumber) {
        this.name = name
        this.passportNumber = passportNumber
        this.seatNumber = seatNumber
        this.bags = []
    }

    addBag(bag) {
        this.bags.push(bag)
    }

    addPlane(Plane) {
        this.Plane.push(Plane)
    }
}

module.exports = Passenger
class Crew {
    constructor(name, position, staffNumber){
        this.name = name
        this.position = position
        this.staffNumber = staffNumber
    }

    addBag(bag) {
        this.bags.push(bag)
    }

    addPlane(Plane) {
        this.Plane.push(Plane)
    }

}

module.exports = Crew

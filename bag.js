class Bag {

    constructor(weight) {
        this.weight = weight

    }

    isOverLimit() {
        return this.weight > 28 ? true : false
    }
}

module.exports = Bag
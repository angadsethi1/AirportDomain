const Airport = require ("./airport")
const Airport1 = new Airport("Heathrow Airport")

describe ('airport', () => {
    test('should return name of Airport', () => {
        expect(Airport1.name).toBe("Heathrow Airport");
    })

    test('should return Airport name as String', () => {
        expect(typeof Airport1.name).toBe("string");
    })

})
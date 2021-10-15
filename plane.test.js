const Plane = require ("./plane")
const Plane1 = new Plane ("Boeing 747")

describe('plane', () => {
    test('should return type of Plane', () => {
        expect(Plane1.type).toBe('Boeing 747');    
    })

    test('should return Plane type as String', () => {
        expect(typeof Plane1.type).toBe("string");
    })
})

const Passenger = require ("./passenger")
const Passenger1 = new Passenger ("John Smith", Number("123456789"), "36A")

describe ('passenger', () => {
    test('should return name of Passenger', () => {
        expect(Passenger1.name).toBe('John Smith');
    })

    test('should return Passport Number', () => {
        expect(Passenger1.passportNumber).toBe(Number('123456789'));
    })

    test('should return Seat Number', () => {
        expect(Passenger1.seatNumber).toBe('36A');
    })

    test('should return name of Passenger as String', () => {
        expect(typeof Passenger1.name).toBe("string");
    })

    test('should return Passport Number as a number', () => {
        expect(typeof Passenger1.passportNumber).toBe("number");
    })

})
const Crew = require ("./Crew")
const Crew1 = new Crew ("Jane Doe", "Stewardess", "ST1234")

describe ('crew', () => {
    test('should return name of Crew', () => {
        expect(Crew1.name).toBe('Jane Doe');
    })

    test('should return position of Crew', () => {
        expect(Crew1.position).toBe('Stewardess');
    })

    test('should return staff number of Crew', () => {
        expect(Crew1.staffNumber).toBe('ST1234');
    })

    test('should return Crew name as String', () => {
        expect(typeof Crew1.name).toBe("string");
    })

    test('should return Crew position as String', () => {
        expect(typeof Crew1.position).toBe("string");
    })

    test('should return Crew staff number as String', () => {
        expect(typeof Crew1.staffNumber).toBe("string");
    })
})


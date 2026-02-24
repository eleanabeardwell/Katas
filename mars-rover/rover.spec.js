const Rover = require('./rover')

describe('Rover Tests', () => {
    let rover;
    beforeEach(() => {
        rover = new Rover()
    })
    it('should throw error if not move command', () => {
        expect(() => rover.move('hello')).toThrow()
    })
    it('should throw error if not turn command', () => {
        expect(() => rover.turn('???')).toThrow()
    })
    // it('should ')
})

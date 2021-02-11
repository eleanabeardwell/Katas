const { assert } = require('chai');
const Rover = require('./rover')

describe('Rover Tests', () => {
    let rover;
    beforeEach(() => {
        rover = new Rover()
    })
    it('should throw error if not move command', () => {
        assert.throws(() => rover.move('hello'))
    })
    it('should throw error if not turn command', () => {
        assert.throws(() => rover.turn('???'))
    })
    it('should ')
})
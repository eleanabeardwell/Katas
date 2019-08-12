var RomanNumeral = require("../app")
var expect = require("chai").expect

describe("RomanNumeralTests", function() {
    
    it("Should Return Correct First 9 Numbers", function() {
        expect(RomanNumeral.calculator(1)).to.equal("I")
        expect(RomanNumeral.calculator(2)).to.equal("II")
        expect(RomanNumeral.calculator(3)).to.equal("III")
        expect(RomanNumeral.calculator(4)).to.equal("IV")
        expect(RomanNumeral.calculator(5)).to.equal("V")
        expect(RomanNumeral.calculator(6)).to.equal("VI")
        expect(RomanNumeral.calculator(7)).to.equal("VII")
        expect(RomanNumeral.calculator(8)).to.equal("VIII")
        expect(RomanNumeral.calculator(9)).to.equal("IX")

    })

    it("Should Return XXXIX when given 39", function() {
        expect(RomanNumeral.calculator(39)).to.equal("XXXIX")
    })

})
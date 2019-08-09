var RomanNumeral = require("../app")
var expect = require("chai").expect

describe("RomanNumeralTests", function() {

    it("Should Return I when given 1", function(){
        expect(RomanNumeral.calculator(1)).to.equal("I")
    })

    it("Should Return III when given 3", function(){
        expect(RomanNumeral.calculator(3)).to.equal("III")
    })

    it("Should Return V when given 5", function(){
        expect(RomanNumeral.calculator(5)).to.equal("V")
    })

    it("Should Return IX when given 9", function(){
        expect(RomanNumeral.calculator(9)).to.equal("IX")
    })

})
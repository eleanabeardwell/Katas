var RomanNumeral = require("../app")
var expect = require("chai").expect

describe("RomanNumeralTests", function() {
    
    it("Should Return Correct First 9 Numbers", function() {
        expect(RomanNumeral.decimalToNumeral(1)).to.equal("I")
        expect(RomanNumeral.decimalToNumeral(2)).to.equal("II")
        expect(RomanNumeral.decimalToNumeral(3)).to.equal("III")
        expect(RomanNumeral.decimalToNumeral(4)).to.equal("IV")
        expect(RomanNumeral.decimalToNumeral(5)).to.equal("V")
        expect(RomanNumeral.decimalToNumeral(6)).to.equal("VI")
        expect(RomanNumeral.decimalToNumeral(7)).to.equal("VII")
        expect(RomanNumeral.decimalToNumeral(8)).to.equal("VIII")
        expect(RomanNumeral.decimalToNumeral(9)).to.equal("IX")

    })

    it("Should Return XIII when given 13", function() {
        expect(RomanNumeral.decimalToNumeral(13)).to.equal("XIII")
    })

    it("Should Return XXV when given 25", function() {
        expect(RomanNumeral.decimalToNumeral(25)).to.equal("XXV")
    })

    it("Should Return XXXVI when given 36", function() {
        expect(RomanNumeral.decimalToNumeral(36)).to.equal("XXXVI")
    })

    it("Should Return XXXIX when given 39", function() {
        expect(RomanNumeral.decimalToNumeral(39)).to.equal("XXXIX")
    })

    it("Should Return L when given 50", function(){
        expect(RomanNumeral.decimalToNumeral(50)).to.equal("L")
    })

    it("Should Return XCIX when given 99", function(){
        expect(RomanNumeral.decimalToNumeral(99)).to.equal("XCIX")
    })

    it("Should Return CLXXII when given 172", function(){
        expect(RomanNumeral.decimalToNumeral(172)).to.equal("CLXXII")
    })

    it("Should Return DXIX when given 519", function(){
        expect(RomanNumeral.decimalToNumeral(519)).to.equal("DXIX")
    })

    it("Should Return CDXIX when given 419", function(){
        expect(RomanNumeral.decimalToNumeral(419)).to.equal("CDXIX")
    })

    it("Should Return M when given 1000", function(){
        expect(RomanNumeral.decimalToNumeral(1000)).to.equal("M")
    })

    it("Should Return CM when given 900", function(){
        expect(RomanNumeral.decimalToNumeral(900)).to.equal("CM")
    })

    it("Should Return MMDCLXXXVIII when given 2688", function(){
        expect(RomanNumeral.decimalToNumeral(2688)).to.equal("MMDCLXXXVIII")
    })

    it("Should Return 2999 when using numeralToDecimal on MMCMXCIX", function(){
        expect(RomanNumeral.numeralToDecimal("MMCMXCIX")).to.equal(2999)
    })

    it("Should Return the Right Decimals for first 3000 Numerals", function(){
        for (j=1; j<=3000; j++) {
            const numeral = RomanNumeral.decimalToNumeral(j);
            expect(RomanNumeral.numeralToDecimal(numeral)).to.equal(j)
        }
    })

})
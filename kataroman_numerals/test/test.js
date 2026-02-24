var RomanNumeral = require("../app")

describe("RomanNumeralTests", function() {
    
    it("Should Return Correct First 9 Numbers", function() {
        expect(RomanNumeral.decimalToNumeral(1)).toBe("I")
        expect(RomanNumeral.decimalToNumeral(2)).toBe("II")
        expect(RomanNumeral.decimalToNumeral(3)).toBe("III")
        expect(RomanNumeral.decimalToNumeral(4)).toBe("IV")
        expect(RomanNumeral.decimalToNumeral(5)).toBe("V")
        expect(RomanNumeral.decimalToNumeral(6)).toBe("VI")
        expect(RomanNumeral.decimalToNumeral(7)).toBe("VII")
        expect(RomanNumeral.decimalToNumeral(8)).toBe("VIII")
        expect(RomanNumeral.decimalToNumeral(9)).toBe("IX")

    })

    it("Should Return XIII when given 13", function() {
        expect(RomanNumeral.decimalToNumeral(13)).toBe("XIII")
    })

    it("Should Return XXV when given 25", function() {
        expect(RomanNumeral.decimalToNumeral(25)).toBe("XXV")
    })

    it("Should Return XXXVI when given 36", function() {
        expect(RomanNumeral.decimalToNumeral(36)).toBe("XXXVI")
    })

    it("Should Return XXXIX when given 39", function() {
        expect(RomanNumeral.decimalToNumeral(39)).toBe("XXXIX")
    })

    it("Should Return L when given 50", function(){
        expect(RomanNumeral.decimalToNumeral(50)).toBe("L")
    })

    it("Should Return XCIX when given 99", function(){
        expect(RomanNumeral.decimalToNumeral(99)).toBe("XCIX")
    })

    it("Should Return CLXXII when given 172", function(){
        expect(RomanNumeral.decimalToNumeral(172)).toBe("CLXXII")
    })

    it("Should Return DXIX when given 519", function(){
        expect(RomanNumeral.decimalToNumeral(519)).toBe("DXIX")
    })

    it("Should Return CDXIX when given 419", function(){
        expect(RomanNumeral.decimalToNumeral(419)).toBe("CDXIX")
    })

    it("Should Return M when given 1000", function(){
        expect(RomanNumeral.decimalToNumeral(1000)).toBe("M")
    })

    it("Should Return CM when given 900", function(){
        expect(RomanNumeral.decimalToNumeral(900)).toBe("CM")
    })

    it("Should Return MMDCLXXXVIII when given 2688", function(){
        expect(RomanNumeral.decimalToNumeral(2688)).toBe("MMDCLXXXVIII")
    })

    it("Should Return 2999 when using numeralToDecimal on MMCMXCIX", function(){
        expect(RomanNumeral.numeralToDecimal("MMCMXCIX")).toBe(2999)
    })

    it("Should Return the Right Decimals for first 3000 Numerals", function(){
        for (j=1; j<=3000; j++) {
            const numeral = RomanNumeral.decimalToNumeral(j);
            expect(RomanNumeral.numeralToDecimal(numeral)).toBe(j)
        }
    })

})

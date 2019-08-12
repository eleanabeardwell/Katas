function RomanNumeralCalculator() {

    function decimalToNumeral(num){
        const numerals = [["M", 1000], ["CM", 900], ["D", 500], ["CD", 400], ["C", 100], ["XC", 90], ["L", 50], ["XL", 40], ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1]]
    
        var string = ""


        while (num > 0) {
            var [numeral, value] = numerals.find(([numeral, value]) => value <= num)
            num -= value
            string += numeral
        } 
        return string
    }

    function numeralToDecimal(numeral) {
        const numerals = {
            M: 1000, 
            D: 500,
            C: 100,
            L: 50,
            X: 10,
            V: 5,
            I: 1

        }
        for (i=0; i<numeral.length; i += 2) {
            var left = numeral[i]
            var right = numeral[i+1]
            
        }
    }
   return { decimalToNumeral, numeralToDecimal }
}



module.exports = RomanNumeralCalculator()
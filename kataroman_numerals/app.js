function RomanNumeralCalculator() {

    function decimalToNumeral(decimal){
        const numerals = [["M", 1000], ["CM", 900], ["D", 500], ["CD", 400], ["C", 100], ["XC", 90], ["L", 50], ["XL", 40], ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1]]
    
        var string = ""

        while (decimal > 0) {
            var [numeral, value] = numerals.find(([numeral, value]) => value <= decimal)
            decimal -= value
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

        sum = 0
        for (i=0; i<numeral.length; i++) {
            if (i === numeral.length - 1) {
                sum += numerals[numeral[i]]
            }
            else {
                var left = numerals[numeral[i]]
                var right = numerals[numeral[i+1]]
                if (left >= right) {
                    sum += left
                }
                else {
                    sum += (right - left)
                    i++
                }
            }
        } 
        return sum
    }
   return { decimalToNumeral, numeralToDecimal }
}



module.exports = RomanNumeralCalculator()
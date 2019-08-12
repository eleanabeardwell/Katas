function RomanNumeralCalculator() {

    function calculator(num){
        var I = "I"
        var V = "V"
        var X = "X"
        var L = "L"
        var string = ""

        if (num % 5 === 4) {
            if (num >= 10) {
                int = Math.floor(num/10)
                string += X.repeat(int)
            }
            string += I
            if ((num + 1) % 10 === 0) {
                string += X
            } 
            else {
                string += V
            }
            return string
        }
        else {
            if (num >= 10) {
                int = Math.floor(num/10)
                string += X.repeat(int)
            }
            if (num % 10 === 1 || num % 10 === 2 || num % 10 === 3) {
                string += I.repeat(num%10)
            }
            else if (num % 10 !== 0) {
                string += V + I.repeat(num%5)
            }
            return string
        }
    }

return { calculator
}
}

module.exports = RomanNumeralCalculator()
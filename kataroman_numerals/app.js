function RomanNumeralCalculator() {

    function calculator(num){
        var I = "I"
        var V = "V"
        var X = "X"
        var string = ""

        if (num % 5 === 4) {
            if (num >= 10) {
                string += X
            }
            string += I
            if ((num + 1) % 10 === 0) {
                string += X
            } else {
                string += V
            }
            return string
        }
        else {
            if (num<4) {
                string += I.repeat(num)
            }
            else if (5 <= num < 10) {
                string += V + I.repeat(num%5)
            }
            return string
        }
    }

return { calculator
}
}

module.exports = RomanNumeralCalculator()
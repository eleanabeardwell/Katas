function RomanNumeralCalculator() {

    function calculator(num){
        var I = "I"
        var V = "V"
        var X = "X"
        var string = ""
        if (num<4) {
            return I.repeat(num) 
        }
        if (num===5) {
            return V
        }

        if (num % 5 === 4) {
            string += I
            if ((num + 1) % 10 === 0) {
                string += X
            } else {
                string += V
            }
            return string
        }
    }

return { calculator

}
}

module.exports = RomanNumeralCalculator()
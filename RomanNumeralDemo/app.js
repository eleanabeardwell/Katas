// handle a submit event

const convertToRomanNumeral = () => {
    document.getElementById('results').style.display = 'block';
    document.getElementById('d2n').style.display = 'block';

    document.getElementById('loading').style.display = 'none';

    const decimal = document.getElementById('decimal')

    const numeral = document.getElementById('roman-numeral')

    var input = decimal.value

    function decimalToNumeral(decimal) {
        const numerals = [["M", 1000], ["CM", 900], ["D", 500], ["CD", 400], ["C", 100], ["XC", 90], ["L", 50], ["XL", 40], ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1]]
    
        var string = ""

        while (decimal > 0) {
            var [numeral, value] = numerals.find(([numeral, value]) => value <= decimal)
            decimal -= value
            string += numeral
        } 
        return string
    }

    numeral.value = decimalToNumeral(input)
}


document.getElementById('convert-d2n-form').addEventListener('submit', (e) => {

    document.getElementById('results').style.display = 'none';

    document.getElementById('n2d').style.display = 'none'

    document.getElementById('loading').style.display = 'block';

    setTimeout(convertToRomanNumeral, 1500);
    e.preventDefault();
});

const convertToDecimal = () => {
    document.getElementById('results').style.display = 'block';
    document.getElementById('n2d').style.display = 'block';

    document.getElementById('loading').style.display = 'none';

    const numeral = document.getElementById('numeral')
    const decimal = document.getElementById('converted-decimal')

    var input = numeral.value

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

    decimal.value = numeralToDecimal(input)
}


document.getElementById('convert-n2d-form').addEventListener('submit', (e) => {

    document.getElementById('results').style.display = 'none';
    document.getElementById('d2n').style.display = 'none';

    document.getElementById('loading').style.display = 'block';

    setTimeout(convertToDecimal, 1500);
    e.preventDefault();
});



function FizzBuzzGame(){

    function call(num){
       var output = num;
    
        if (num % 3 === 0){
            output = "Fizz";
        }
        if (num % 5 === 0) {
            output = "Buzz";
        }
        if (num % 3 === 0 && num % 5 === 0) {
            output = "FizzBuzz";
        }
        return output;
    }

    return {
        call

    }
}

module.exports = FizzBuzzGame();
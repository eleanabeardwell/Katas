function FizzBuzzGame(){

    function createFizzBuzzList(num){
       var output = num;
    
        if (num % 3 === 0){
            output = "Fizz";
        }
        if (num % 5 === 0) {
            output = "Buzz";
        }
        if (num % 15 === 0) {
            output = "FizzBuzz";
        } 
        return output;
    }

    return {
        createFizzBuzzList

    }
}

module.exports = FizzBuzzGame();

/*function createFizzBuzzList(num) {
    return (num % 3 ? "" : "Fizz") + (num % 5 ? "" : "Buzz") || num; 
}*/
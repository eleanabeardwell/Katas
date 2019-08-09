function FizzBuzzGame() {

    function createFizzBuzzList(num){
        var array = []
        for (i=1; i<=num; i++) {
            if (isModuloZero(i,15) {
                array.push("FizzBuzz")
            }
            else if (isModuloZero(i,3)) {
                array.push("Fizz")
            } 
            else if (isModuloZero(i,5)) {
                array.push("Buzz")
            }
            else {
                array.push(i)
            }
        }
        return array
    }

    function reverseFizzBuzz(num){
        var list = createFizzBuzzList(num)  
        for (i=0; i<list.length; i++) {
            if (list[i] === "Fizz") {
                updateIndex(list,i)
            }
            else if (list[i] === "Buzz") {
                updateIndex(list,i)
            }
            else if (list[i] === "FizzBuzz") {
                updateIndex(list,i)
            }
        }
        return list
    }

    function updateIndex(list,i) {
        list[i] = i + 1
    }

    function isModuloZero(a,b) {
        return a % b === 0
    }


    return { reverseFizzBuzz, createFizzBuzzList

    }
}

module.exports = FizzBuzzGame();

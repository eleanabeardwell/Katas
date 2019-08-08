function FizzBuzzGame() {

    function call(num){
        var array = []
        for (i=1; i<=num; i++) {
            if (isModuloZero(i,3) && isModuloZero(i,5)) {
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

    function reverseFizzBuzz(list){
        for (i=0; i<list.length; i++) {
            if (list[i] === "Fizz") {
                updateIndex(list,i)
            }
            else if (list[i] === "Buzz") {
                updateIndex(list,i)
            }
            else if (list[i] === "FizzBuzz") {
                updateIndex(list,i)
            } else {
                list[i] = list[i] //better way to write this?
            }
        }
        return list
    }

    function isModuloZero(a,b) {
        return a % b === 0
    }

    function updateIndex(list,i) {
        list[i] = i + 1
    }

    function createStraightList(num){
        var array = []
        for (i=1; i<=num; i++) {
            array.push(i)
        }
        return array
    }
    return { call, reverseFizzBuzz, createStraightList

    }
}

module.exports = FizzBuzzGame();

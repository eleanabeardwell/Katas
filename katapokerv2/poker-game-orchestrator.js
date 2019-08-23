var numberEvaluator = require("hand-evaluators/number-evaluation.js")
var suitsEvaluator = require("hand-evaluators/suits-evaluation.js")

function PokerGameOrchestrator() {
    function playGame(A,B) {
        var suitsA = convertToSuits(A)
        var suitsB = convertToSuits(B)
        var numbersA = convertToIntegers(A)
        var numbersB = convertToIntegers(B)

        var suitsMap = suitsEvaluator.evaluate(suitsA)
        
    }

    var convertToIntegers = (A) => {
        var list = []
        for (i=0; i<A.length; i++) {
            list.push(values[A[i].slice(0, -1)])
        }
        list.sort(function(a, b){return a - b})
        return list
    }

    var convertToSuits = (A) => {
        var list = []
        for (i=0; i<A.length; i++) {
            list.push(A[i].slice(-1))
        } return list
    }

}

module.exports = PokerGameOrchestrator()
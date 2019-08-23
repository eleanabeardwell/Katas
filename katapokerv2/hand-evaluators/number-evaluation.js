function numberEvaluator() {
    var map = {
        TwoPair: false,
        CardsWithSameValue: 0,
        Straight: false,
        HighCard: 0
    }

    function evaluate(A) {
        map.CardsWithSameValue = findSameValues(A)
        map.Straight = findStraight(A)
        map.HighCard = A[(A.length)-1]
        return map
    }

    var findSameValues = (A) => {
        var sameValueNumbers = []
        for (i=0; i<A.length-1; i++) {
            if (A[i]===A[i+1]) {
                if (sameValueNumbers[0]!==A[i]) {
                    map.TwoPair = true
                } else {
                    sameValueNumbers.push(A[i])
                }
            }
        } 
        return sameValueNumbers.length+1
    }    
    
    var findStraight = (A) => {
        for (i=0; i<A.length-1; i++) {
            if (A[i+1] - A[i] !== 1) {
                return false
            } 
        } return true
    }

    return {evaluate}

}
 module.exports = numberEvaluator()
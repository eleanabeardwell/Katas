function PokerGame() {
    var deal = (A,B) => {

        var numListA = convertToIntegers(A)
        var numListB = convertToIntegers(B)

        if(isStraightFlush(A, numListA) || isStraightFlush(B, numListB)) {
            return calculateStraightFlush(A, B, numListA,numListB)
        }

        if(isFourOfKind(numListA) || isFourOfKind(numListB)) {
            return calculateFourOfKind(numListA,numListB)
        }
        if(isFullHouse(numListA) || isFullHouse(numListB)) {
            return calculateFullHouse(numListA,numListB)
        }
        if(isFlush(A) || isFlush(B)) {
            return calculateFlush(A,B)
        }
        if(isStraight(numListA) || isStraight(numListB)) { 
            return calculateStraight(numListA, numListB)
        }
        if(isTriple(numListA) || isTriple(numListB)) {   
            return calculateTriple(numListA, numListB)
        }
        if (isTwoPair(numListA) || isTwoPair(numListB)) {   
            return calculateTwoPair(numListA, numListB)
        } 
        if (isPair(numListA) || isPair(numListB)) {    
            return calculatePair(numListA, numListB)
        }
        else {
            return highCard(numListA, numListB)
        }             
    }

    //Straight Flush
    var calculateStraightFlush = (A,B, numListA, numListB) => {
        return (isStraightFlush(A, numListA) && isStraightFlush(B, numListA) ? highCard(numListA,numListB) : isStraightFlush(A, numListA) ? "Player A Wins" : "Player B Wins")
    }

    var isStraightFlush = (A, numListA) => {
        return isFlush(A) && isStraight(numListA)
    }

    //Four Of A Kind
    var calculateFourOfKind = (A,B) => {
        if (isFourOfKind(A) && isFourOfKind(B)) {
            return (findFourOfKind(A)[0]>findFourOfKind(B)[0] ? "Player A Wins" : "Player B Wins")
        } else {
            return (findFourOfKind(A) ? "Player A Wins" : "Player B Wins")
        }
    }

    var findFourOfKind = (A) => {
        var four = []
        for (i=0; i<A.length-3; i++) {
            if (A[i]===A[i+1] && A[i]===A[i+2] && A[i]===A[i+3]) {
                four.push(A[i])
                }
        }
        return four
    }

    var isFourOfKind = (numList) => {
        return findFourOfKind(numList).length===1 
    }


    //Full House
    var calculateFullHouse = (A,B) => {
        if (isFullHouse(A) && isFullHouse(B)) {
            return (findTriple(A)[0]>findTriple(B)[0] ? "Player A Wins" : "Player B Wins")
        } else {
            return (isFullHouse(A) ? "Player A Wins" : "Player B Wins")
        }
    }

    var isFullHouse = (A) => {
        if (isTriple(A)) {
            var remaining = A.filter(num => num!==findTriple(A)[0])
            return isPair(remaining)
        } else {
            return false
        }
    }
    //Flush
    var calculateFlush = (A,B) => {
        var numListA = convertToIntegers(A)
        var numListB = convertToIntegers(B)
         return (isFlush(A) && isFlush(B) ? highCard(numListA,numListB) : isFlush(A) ? "Player A Wins" : "Player B Wins")
    }

    var isFlush = (A) => {
        const allSuitsEqual = arr => arr.every(v => v === arr[0])
        return allSuitsEqual(convertToSuits(A))

    }

    //Straight
    var calculateStraight = (A,B) => {
        return (isStraight(A) && isStraight(B) ? highCard(A,B) : isStraight(A) ? "Player A Wins" : "Player B Wins")
    }

    var isStraight = (A) => {
        for (i=0; i<A.length-1; i++) {
            if (A[i+1] - A[i] !== 1) {
                return false
            } 
        } return true
    }

    //Triple
    var calculateTriple = (A,B) => {
        if (findTriple(A).length===1 && findTriple(B).length===1) {
            return (findTriple(A)[0]>findTriple(B)[0] ? "Player A Wins" : "Player B Wins")
        } else {
            return (findTriple(A).length===1 ? "Player A Wins" : "Player B Wins")
        }
    }

    var findTriple = (A) => {
        var triple = []
        for (i=0; i<A.length-2; i++) {
            if (A[i]===A[i+1] && A[i]===A[i+2]) {
                triple.push(A[i])
                }
        }
        return triple
    }

    var isTriple = (numList) => {
        return findTriple(numList).length===1 
    }

    //Double Pair
    var calculateTwoPair = (A,B) => {
        if (findPairs(A).length===2 && findPairs(B).length===2) {
            var remainingA = A.filter(num => num!==findPairs(A)[0] && num!==findPairs(A)[1])
            var remainingB = B.filter(num => num!==findPairs(B)[0] && num!==findPairs(B)[1])
            return (checkSamePairs(findPairs(A),findPairs(B)) ? highCard(remainingA, remainingB) : A[1]>B[1] ? "Player A Wins" : "Player B Wins")
        } 
        else {
            return (findPairs(A).length===2 ? "Player A Wins" : "Player B Wins")
        }
    }

    var isTwoPair = (numList) => {
        return findPairs(numList).length===2
    }

    // Pair
    var calculatePair = (A,B) => {
        if (findPairs(A).length===1 && findPairs(B).length===1) {
            var remainingA = A.filter(num => num!==findPairs(A)[0])
            var remainingB = B.filter(num => num!==findPairs(B)[0])
            return (findPairs(A)[0]===findPairs(B)[0] ? highCard(remainingA, remainingB) : findPairs(A)[0]>findPairs(B)[0] ? "Player A Wins" : "Player B Wins")
        } 
        else {
            return (findPairs(A).length===1 ? "Player A Wins" : "Player B Wins")
        }
    }

    var findPairs = (A) => {
        var pair = []
        for (i=0; i<A.length-1; i++) {
            if (A[i]===A[i+1]) {
                pair.push(A[i])
            }
        } 
        return pair
    }

    var isPair = (numList) => {
        return findPairs(numList).length===1
    }

    var highCard = (A,B) => {
        while(A.length >= 0) {
            var maxNumA = Math.max(...A)
            var maxNumB = Math.max(...B)
            if (A.length===0) {
                return "Draw"
            }
            if (maxNumA===maxNumB) {
                A = A.filter(num => num!==maxNumA)
                B = B.filter(num => num!==maxNumB)
            } else {
                return (maxNumA > maxNumB ? "Player A Wins" : "Player B Wins")
            }
        }
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

    var checkSamePairs  = (A,B) => {
        if ((A[0]===B[0] && A[1]===B[1])) {
            return true
        } 
        else {
            return false
        }
    }

    const values = {
        A: 14, 
        K: 13,
        Q: 12,
        J: 11,
        10: 10,
        9: 9, 
        8: 8,
        7: 7,
        6: 6,
        5: 5,
        4: 4,
        3: 3,
        2: 2,
        1: 1

    }

    return {deal}
}


module.exports = PokerGame();

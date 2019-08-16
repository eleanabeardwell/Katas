function PokerGame() {
    var deal = (A,B) => {

        numberListA = []
        numberListB = []

        for (i=0; i<A.length; i++) {
            numberListA.push(values[A[i].slice(0, -1)])
        }
        for (j=0; j<B.length; j++) {
            numberListB.push(values[B[j].slice(0, -1)])
        }

        var maxNumberA = Math.max(...numberListA)
        var maxNumberB = Math.max(...numberListB)

        if (maxNumberA > maxNumberB) {
            return "Player A Wins"
        }
        if (maxNumberA < maxNumberB) {
            return "Player B Wins"
        }
        else { return "Draw"
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

// function highCard(maxNumberA, maxNumberB) {
    //return maxNumberA > maxNumberB ? "Player A Wins" : "Player B Wins" || "Draw"
// }

function bowlingGame(){
    var score = 0
    var rolls = []

    function roll(pins){
        score += pins
        rolls.push(pins)

    }
    function getScore(){
        var maxIndex = rolls.length - 2

        for (i=0; i< maxIndex; i++){
            if (isSpare(i)){
                score += rolls[i+2]
            }
            if (isStrike(i)){
                score += (rolls[i+1] + rolls[i+2])
            }
        }

        return score
    }

    function isSpare(i){
        return (rolls[i] + rolls[i+1] === 10)
    }

    function isStrike(i){
        return (rolls[i] === 10)
    }
    function createNewGame(){
       score = 0
       rolls = []
    }
    return {
        roll, getScore, createNewGame
    }
}

module.exports = bowlingGame()
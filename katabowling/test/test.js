var bowlingGame = require("../app")
var expect = require("chai").expect
describe("BowlingGameTests", function(){

    function rollingMultipleWithSameValue(roll, pins){
        for (i=0; i<roll; i++){
            bowlingGame.roll(pins)
        }
    }
    beforeEach(function(){
        bowlingGame.createNewGame()
    })

    it("ShouldReturnZeroIfGutter", function(){
        bowlingGame.roll(0)
        expect(bowlingGame.getScore()).to.equal(0)
    })
    it("Should return one if you hit one", function(){
        bowlingGame.roll(1)
        expect(bowlingGame.getScore()).to.equal(1)
    })
    it("Should return 0 if all rolls are gutters", function(){
        rollingMultipleWithSameValue(20, 0)
        expect(bowlingGame.getScore()).to.equal(0)
    })
    it("Should return 16 when rolling a spare and a 3", function(){
        bowlingGame.roll(5)
        bowlingGame.roll(5)
        bowlingGame.roll(3)
        rollingMultipleWithSameValue(17, 0)
        expect(bowlingGame.getScore()).to.equal(16)
    })
    it("Should return 26 when rolling a strike, a 3 and a 5", function(){
        bowlingGame.roll(10)
        bowlingGame.roll(3)
        bowlingGame.roll(5)
        rollingMultipleWithSameValue(16, 0)
        expect(bowlingGame.getScore()).to.equal(26)
    })

})
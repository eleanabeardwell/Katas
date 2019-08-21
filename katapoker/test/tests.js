var PokerGame = require("../app")
var expect = require("chai").expect

describe( "PokerTests", function(){

    it("Should Return Player B wins when Comparing five cards with Player A", function(){
        expect(PokerGame.deal(["KH", "2S", "3C", "1D", "10S"], ["KD", "8C", "9H", "1C", "10D"])).to.equal("Player B Wins")
    })

    it("Should Return Draw when Comparing same five cards with Player B", function(){
        expect(PokerGame.deal(["KH", "QS", "AC", "1D", "10S"], ["KD", "QH", "AS", "1C", "10D"])).to.equal("Draw")
    })

    it("Should Return Player B wins if Player B has pair", function(){
        expect(PokerGame.deal(["2S", "1C", "AD", "6C", "KD"], ["KH", "KS", "AC", "1C", "10S"])).to.equal("Player B Wins")
    })

    it("Should Return Player A wins if Player A has the highest pair", function(){
        expect(PokerGame.deal(["KH", "KS", "AC", "1C", "10S"], ["2S", "1C", "AD", "2H", "KD"])).to.equal("Player A Wins")
    })

    it("Should Return Player B wins if both players have same pair but B has high card", function(){
        expect(PokerGame.deal(["KC", "1C", "3D", "2H", "KD"], ["2C", "KH", "KS", "1C", "10S"])).to.equal("Player B Wins")
    })

    it("Should Return Draw if both players have same pair and same remaining cards", function(){
        expect(PokerGame.deal(["KC", "KD", "1D", "2H","3D"], ["3C", "KH", "KS", "1C", "2S"])).to.equal("Draw")
    })

    it("Should Return Player A wins if A has double pair", function(){
        expect(PokerGame.deal(["KH", "KS", "2C", "10C", "10S"], ["KC", "1C", "3D", "2H", "KD"])).to.equal("Player A Wins")
    })

    it("Should Return Player B wins if Player B has highest double pair", function(){
        expect(PokerGame.deal(["KC", "1C", "1S", "3H", "3D"], ["2C", "KH", "KS", "10C", "10S"])).to.equal("Player B Wins")
    })

    it("Should Return Player A wins if both players have same double pair and A has high card", function(){
        expect(PokerGame.deal(["10H", "10D", "3D", "KC", "KD"], ["2C", "KH", "KS", "10C", "10S"])).to.equal("Player A Wins")
    })
    
    it("Should Return Player B wins if Player B has a highest Three Of a Kind", function(){
        expect(PokerGame.deal(["2S", "6H", "AD", "6C", "6D"], ["KH", "1C", "KS", "10S", "KC"])).to.equal("Player B Wins")
    })

    it("Should Return Player A Wins if A has a Straight", function(){
        expect(PokerGame.deal(["2S", "3H", "4D", "5C", "6D"], ["KH", "1C", "KS", "10S", "KC"])).to.equal("Player A Wins")
    })

    it("Should Return Player B Wins if B has highest Straight", function(){
        expect(PokerGame.deal(["2S", "3H", "4D", "5C", "6D"], ["9H", "10C", "JS", "QS", "KC"])).to.equal("Player B Wins")
    })

    it("Should Return Player B Wins if B has a Flush", function() {
        expect(PokerGame.deal(["2S", "3S", "4D", "5C", "6D"], ["9H", "10H", "5H", "7H", "AH"])).to.equal("Player B Wins")
    })

    it("Should Return Player A Wins if both players have flush but A has high card", function() {
        expect(PokerGame.deal(["9H", "10H", "5H", "7H", "AH"], ["2S", "3S", "6S", "5S", "8S"])).to.equal("Player A Wins")
    })

    it("Should Return Player A Wins if A has Full House", function() {
        expect(PokerGame.deal(["10S", "10H", "10D", "7H", "7S"], ["2S", "3S", "6S", "5S", "8S"])).to.equal("Player A Wins")
    })

    it("Should Return Player B Wins if both players have a Full House but B has higher Three of A Kind", function() {
        expect(PokerGame.deal(["10S", "10H", "10D", "7H", "7S"], ["AS", "AC", "AH", "5S", "5D"])).to.equal("Player B Wins")
    })

    it("Should Return Player A Wins if A has Four of A Kind", function() {
        expect(PokerGame.deal(["10S", "10H", "10D", "10C", "7S"], ["AS", "AC", "AH", "5S", "5D"])).to.equal("Player A Wins")
    })

    it("Should Return Player A Wins if both players have Four Of A Kind but A has highest", function() {
        expect(PokerGame.deal(["10S", "10H", "10D", "10C", "7S"], ["2S", "2C", "2H", "2D", "5D"])).to.equal("Player A Wins")
    })

    it("Should Return Player B Wins if B has a Straight Flush", function() {
        expect(PokerGame.deal(["10S", "10H", "10D", "10C", "7S"], ["2S", "3S", "4S", "5S", "6S"])).to.equal("Player B Wins")
    })

    it("Should Return Player A Wins if A has highest Straight Flush", function() {
        expect(PokerGame.deal(["9H", "10H", "JH", "QH", "KH"], ["2S", "3S", "4S", "5S", "6S"])).to.equal("Player A Wins")
    })

}

)
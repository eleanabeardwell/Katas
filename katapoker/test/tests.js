var PokerGame = require("../app")
var expect = require("chai").expect

describe( "PokerTests", function(){

    it("Should Return Player B Wins when Player B has a picture card", function(){
        expect(PokerGame.deal(["8D"], ["QS"])).to.equal("Player B Wins")
    })

    it("Should Return Draw if Player A and Player B Have Same Card", function(){
        expect(PokerGame.deal(["10D"], ["10S"])).to.equal("Draw")
    })

    it("Should Return Player A wins when Comparing five cards with Player B", function(){
        expect(PokerGame.deal(["KH", "QS", "AC", "1D", "10S"], ["2S", "1C", "5D", "6C", "KD"])).to.equal("Player A Wins")
    })

    it("Should Return Draw when Comparing five cards with same High Card", function(){
        expect(PokerGame.deal(["KH", "QS", "AC", "1D", "10S"], ["2S", "1C", "AD", "6C", "KD"])).to.equal("Draw")
    })
}

)
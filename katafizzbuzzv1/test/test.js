var FizzBuzzGame = require("../app");
var expect = require("chai").expect;
describe("Fizz Buzz Tests", function(){

    it("Should Return 1 for First Value", function(){
        expect(FizzBuzzGame.call(1)).to.equal(1);
    })
    it("Should Return Fizz if 3", function(){
        expect(FizzBuzzGame.call(3)).to.equal("Fizz");

    })
    it("Should Return Buzz if 5", function(){
        expect(FizzBuzzGame.call(5)).to.equal("Buzz");
    })

    it("Should Return FizzBuzz if 15", function(){
        expect(FizzBuzzGame.call(15)).to.equal("FizzBuzz");
    })

    it("Should Return Fizz if Divisible by 3", function(){
        expect(FizzBuzzGame.call(6)).to.equal("Fizz");
    })

    it("Should Return Buzz if Divisible by 5", function(){
        expect(FizzBuzzGame.call(10)).to.equal("Buzz");
    })
    it("Should Return FizzBuzz if Divisible by 3 and 5", function(){
        expect(FizzBuzzGame.call(30)).to.equal("FizzBuzz");
    })


})
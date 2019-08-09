var FizzBuzzGame = require("../app");
var expect = require("chai").expect;
describe("Fizz Buzz Tests", function(){

    it("Should Return 1 for First Value", function(){
        expect(FizzBuzzGame.createFizzBuzzList(1)).to.equal(1);
    })
    it("Should Return Fizz if 3", function(){
        expect(FizzBuzzGame.createFizzBuzzList(3)).to.equal("Fizz");

    })
    it("Should Return Buzz if 5", function(){
        expect(FizzBuzzGame.createFizzBuzzList(5)).to.equal("Buzz");
    })

    it("Should Return FizzBuzz if 15", function(){
        expect(FizzBuzzGame.createFizzBuzzList(15)).to.equal("FizzBuzz");
    })

    it("Should Return Fizz if Divisible by 3", function(){
        expect(FizzBuzzGame.createFizzBuzzList(6)).to.equal("Fizz");
    })

    it("Should Return Buzz if Divisible by 5", function(){
        expect(FizzBuzzGame.createFizzBuzzList(10)).to.equal("Buzz");
    })
    it("Should Return FizzBuzz if Divisible by 3 and 5", function(){
        expect(FizzBuzzGame.createFizzBuzzList(30)).to.equal("FizzBuzz");
    })


})
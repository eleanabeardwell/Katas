var FizzBuzz = require("../app")
var expect = require("chai").expect

describe("FizzBuzzTests", function(){

    it("Should Return Array Given", function(){
        var list1 = [1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz"]
        expect(FizzBuzz.call(15)).to.deep.equal(list1)
    })

    it("Should Return Fizz for Third Element in Array", function(){
        expect(FizzBuzz.call(3)[2]).to.equal("Fizz")
    })

    it("Should Return Buzz if divisible by 5", function(){
        expect(FizzBuzz.call(5)[4]).to.equal("Buzz")
    })

    it("Should Return FizzBuzz if divisible by 3 and 5", function(){
        expect(FizzBuzz.call(15)[14]).to.equal("FizzBuzz")
    })

    it("Should Return List of Numbers Given FizzBuzz List", function(){
        var list1 = [1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz"]
        var list2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
        
        /* var list2 = []
        function createStraightList(num){
            for (i=1; i<=num; i++){
                list2.push(i)
            }
        } */

        expect(FizzBuzz.reverseFizzBuzz(list1)).to.deep.equal(list2)  // want to pass function into function i.e. reverseFizzBuzz(call(15))
    })
})


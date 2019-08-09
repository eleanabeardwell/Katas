var FizzBuzz = require("../app")
var expect = require("chai").expect

describe("FizzBuzzTests", function(){

    var lengthOfList = 20

    it("Should Return Correct Array For First 15", function(){
        var list1 = [1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz"]
        expect(FizzBuzz.createFizzBuzzList(15)).to.deep.equal(list1)
    })

    it("Should Return Fizz for Third Element in Array", function(){
        expect(FizzBuzz.createFizzBuzzList(lengthOfList)[2]).to.equal("Fizz")
    })

    it("Should Return Buzz if divisible by 5", function(){
        expect(FizzBuzz.createFizzBuzzList(lengthOfList)[4]).to.equal("Buzz")
    })

    it("Should Return FizzBuzz if divisible by 3 and 5", function(){
        expect(FizzBuzz.createFizzBuzzList(lengthOfList)[14]).to.equal("FizzBuzz")
    })

    it("Should Return List of Numbers Given FizzBuzz List", function(){
        expect(FizzBuzz.reverseFizzBuzz(lengthOfList)).to.deep.equal(createNumberList())  
    })

    function createNumberList(){
        var array = []
        for (i=1; i<=lengthOfList; i++) {
            array.push(i)
        }
        return array
    }

   

    

})


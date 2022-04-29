describe("Sample Test",function(){

    beforeAll(function(){
        console.log("Before All")
    })
    afterAll(function(){
        console.log("After All")
    })
    beforeEach(function(){
        console.log("Before Each")
    })
    afterEach(function(){
        console.log("After Each")
    })
    it ("first test",function(){
        console.log("Test 1 "+(2+4))
        expect(2+4).toBe(6);
    })
    it ("second test",function(){
        console.log("Test 2 "+(2*4))
        expect(2*4).toBe(8);
    })
})
describe("calculator Test",function(){

    it("add test",function(){
        console.log("Test add method",
        add(2,3));

        expect(add(2,3)).toBe(5);
    })

    it("multiply test",function(){
       // console.log("Test add method", add(2,3));

        expect(multiply(2,3)).toBe(6);
    })
})
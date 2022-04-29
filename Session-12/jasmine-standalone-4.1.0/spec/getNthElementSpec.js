describe("Get Nth Element",function(){

    it("defined",function(){
        expect(getNthElement).toBeDefined();
    })

    it("check",function(){
        expect(getNthElement([10,20,30,40],2)).toBe(30);
    })
})
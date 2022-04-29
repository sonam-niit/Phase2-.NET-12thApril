describe("Spy Demo",function(){
    var x,y=null;

    beforeEach(function(){
        x={
            setY:function(value){
                y=value
            },
            getY:function(){
                return y;
            }
        }

        spyOn(x,'setY').and.callThrough();
        spyOn(x,'getY').and.returnValue(456);
    })

    it('can call through',function(){
        x.setY(123);
        expect(y).toEqual(123);

        x.setY.and.stub();
        y= null;

        x.setY(123);
        expect(y).toBe(null);
    })
    it('return a specific value',function(){
        expect(x.getY()).toEqual(456);
    })
})
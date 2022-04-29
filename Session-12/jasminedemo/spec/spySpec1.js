describe("Spy Demo1",function(){
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
        x.setY(23);
    })

    it('check spy called or not',function(){
        expect(x.setY).toHaveBeenCalled();
    })
    it('check spy called or not with some value',function(){
        expect(x.setY).toHaveBeenCalledWith(23);
    })
})
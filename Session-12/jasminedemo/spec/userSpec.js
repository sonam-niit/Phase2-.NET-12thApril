class User{

    fullName(fname,lname){
        return fname+" "+lname;
    }
    checkAge(age){
        return age>=18;
    }
    result(a,b,c){
        return (a+b+c)/3;
    }
}

describe("User test",function(){

    var user;

    beforeEach(function(){
        user= new User();
    })
    afterEach(function(){
        user=null;
    })

    it('should return full name',function(){

        expect(user.fullName("sonam","soni")).toEqual("sonam soni");
        expect(user.fullName("sonam","soni")).not.toEqual("sonamsoni");
    })

    it('should check age for voting',function(){
        expect(user.checkAge(34)).toBeTruthy();
        expect(user.checkAge(12)).toBeFalsy();
        expect(user.checkAge(5)).not.toBeTruthy();
    })

    it('should pass with distinction',function(){
        expect(user.result(67,78,89)).toBeGreaterThan(70);
        expect(user.result(67,78,40)).not.toBeGreaterThan(70);
    })

    it('able to declare class',function(){
        expect(user).toBeDefined();
        expect(user).not.toBeUndefined();
        expect(user).not.toBeNull();
    })
})
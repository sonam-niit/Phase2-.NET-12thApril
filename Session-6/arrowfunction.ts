class Adder{
    constructor(public a:number){ }

    add = (b:number) : number => this.a+b; //funtion add
}
class Child extends Adder{

    constructor(test:number)
    {
        super(test); //passing parameter to parent class constructor
    }
    callAdd = (b:number) : number => this.add(b); //calling a function of parent class
}

const child= new Child(12);
console.log(child.callAdd(4));
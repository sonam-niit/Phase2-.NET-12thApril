export class Employee{
    empCode:number;
    empName:string;

    constructor(name:string,code:number){
        this.empCode=code;
        this.empName=name;
    }

    displayEmployee(){
        console.log("Code: "+this.empCode)
        console.log("Name: "+this.empName)
    }
}
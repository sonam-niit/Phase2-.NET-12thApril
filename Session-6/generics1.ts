import { Employee } from "./importexport/Employee";
class Queue<T>{

    data: T[]=[];

    push=(item:T)=> this.data.push(item);

    pop=():T=>this.data.shift();
}

let n= new Queue<number>();
n.push(10);n.push(20);n.push(30);n.push(40);
console.log(n.data);
console.log(n.pop());
console.log(n.data);

let emplist= new Queue<Employee>();
emplist.push(new Employee("sonam",12));
emplist.push(new Employee("Akshita",56));
console.log(emplist.data);
console.log(emplist.pop());
console.log(emplist.data);
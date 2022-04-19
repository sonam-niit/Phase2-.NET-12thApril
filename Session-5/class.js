class Student{

    constructor(id,name,email){
        this.id=id;
        this.name=name;
        this.email=email;
    }

    display(){
        console.log("Id: "+this.id);
        console.log("Name: "+this.name);
        console.log("Email Id: "+this.email);
    }

}

let s1= new Student(1,"sonam","sonam@gmail.com")
s1.display();
let s2= new Student(2,"Akhsita","ak@gmail.com");
s2.display();
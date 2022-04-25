import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  user:User= {fname:"sonam",lname:"Soni",email:"Sonam@123"};

  getData(){
    console.log(this.user); //Chnage you can see in console
    //late we will do in html with the help of Routing
    return this.user;
  }
  saveData(newUser:User){
      this.user= newUser;
      this.getData();
  }
}

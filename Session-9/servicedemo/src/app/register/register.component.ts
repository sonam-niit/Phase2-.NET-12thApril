import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User= new User();
  registerForm:FormGroup;
  submitted:boolean=false;

  constructor(private builder:FormBuilder, private service: UserService) { }

  ngOnInit(): void {

    this.registerForm= this.builder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
    });
  }

  get form(){
    return this.registerForm.controls;
  }

  onSubmit(){
    this.submitted=true;

    if(this.registerForm.invalid)
      return;
    else
      {
          this.service.saveData(this.user);
      }
  }

}
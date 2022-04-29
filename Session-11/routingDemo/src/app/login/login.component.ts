import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  submitted:boolean=false;

  constructor(private builder:FormBuilder) { }

  ngOnInit(): void {

    this.loginForm= this.builder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]
    });
  }

  get form(){
    return this.loginForm.controls;
  }

  onSubmit(){
    this.submitted=true;

    if(this.loginForm.invalid)
      return;
    else
      alert("Form submitted for approval")
  }

}
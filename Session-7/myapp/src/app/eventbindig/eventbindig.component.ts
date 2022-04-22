import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbindig',
  templateUrl: './eventbindig.component.html',
  styleUrls: ['./eventbindig.component.css'],

})
export class EventbindigComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  visible:boolean=false;
  show(){
    this.visible= !this.visible;
    console.log("Value changed "+this.visible);
  }

  message: string="Welcome user";
}

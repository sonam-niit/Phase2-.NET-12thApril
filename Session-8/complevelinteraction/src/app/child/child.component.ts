import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  inputs:[`pdata`],
  outputs:[`myChildEvent`]
})
export class ChildComponent implements OnInit {

  pdata:string="";
  constructor() { }

  ngOnInit(): void {
  }

  myChildEvent= new EventEmitter();
  onChange(value:string){
    this.myChildEvent.emit(value);
  }
}

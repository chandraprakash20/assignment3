import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {

  constructor() { }
  a:Number = 60;
  b:String = 'nayan surati'
  c:Date = new Date('12/12/2000')

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // log(x: any) {console.log(x);}
  todayNumber: number = Date.now();
  Morning: number = 12;
  Afternoon: number = 15;
  evening: number = 16;
  constructor() { }

  ngOnInit(): void {
    
  }
   
  

}

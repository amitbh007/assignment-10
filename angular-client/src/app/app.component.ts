import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers:[DataService]
})
export class AppComponent implements OnInit{
  title = 'angular-client';
  showTable = false;
  // @ViewChild('loadButton') loadButton:ElementRef;
  constructor(private dataService:DataService){}
  ngOnInit(){
    
  }

  loadButton(){
    this.showTable = true;
    this.dataService.getData();
    console.log("working");
  }

}

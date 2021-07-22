import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../user.model';

const classToObject = (theClass:any) => {
  const originalClass = theClass || {}
  const keys = Object.getOwnPropertyNames(Object.getPrototypeOf(User))
  console.log("keys",keys);
  return {}
  
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @ViewChild('maintable',{static: false}) mainTable:ElementRef;

  users:User[] = [];
  dataType:any;
  @Input('show') show:boolean = false;

  constructor(private dataService:DataService,private renderer:Renderer2) { }

  ngOnInit(): void {
    this.dataType = classToObject(User);
    console.log("user fields",this.dataType)
    this.dataService.fetchData.subscribe(data=>{
      this.users = data;
    })
    
  }

}

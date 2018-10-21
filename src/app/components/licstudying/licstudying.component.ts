import { Component, OnInit } from '@angular/core';
import {HttpClient}  from "@angular/common/http";
@Component({
  selector: 'app-licstudying',
  templateUrl: './licstudying.component.html',
  styleUrls: ['./licstudying.component.css']
})
export class LicstudyingComponent implements OnInit {

  constructor(private http:HttpClient) { }
  classes;
  ngOnInit() {
    this.http.get('/api').subscribe((data)=>{
      this.classes=data;
    });
  }

}

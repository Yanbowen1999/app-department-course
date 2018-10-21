import { Component, OnInit } from '@angular/core';
import {HttpClient}  from "@angular/common/http";
@Component({
  selector: 'app-tbk',
  templateUrl: './tbk.component.html',
  styleUrls: ['./tbk.component.css']
})
export class TbkComponent implements OnInit {

  constructor(private http:HttpClient) { }
  
  courses;
  ngOnInit() {
    this.http.get('/api/courses').subscribe((data)=>{
      this.courses=data;
    });
  }

}

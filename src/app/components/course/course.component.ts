import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {HttpClient}  from "@angular/common/http";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private router : ActivatedRoute,private route:Router,private http:HttpClient) { }
  classes;
  ngOnInit() {
    this.http.get('/api').subscribe((data)=>{
      this.classes=data;
    });
  }

}

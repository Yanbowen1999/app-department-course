import { Component, OnInit } from '@angular/core';
import {HttpClient}  from "@angular/common/http";
import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-codetail',
  templateUrl: './codetail.component.html',
  styleUrls: ['./codetail.component.css']
})
export class CodetailComponent implements OnInit {

  constructor(private router : ActivatedRoute,private route:Router,private http:HttpClient) { }
  courseId:number;
  cla;
  ngOnInit() {
    this.courseId=this.router.snapshot.params['courseId'];
    this.http.get('/api/courses/'+this.courseId).subscribe((data)=>{
      this.cla=data;
    })
  }

}

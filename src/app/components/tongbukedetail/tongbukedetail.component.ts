import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {HttpClient}  from "@angular/common/http";
import {filter,map} from "rxjs/operators";
import { pipe } from 'rxjs';
@Component({
  selector: 'app-tongbukedetail',
  templateUrl: './tongbukedetail.component.html',
  styleUrls: ['./tongbukedetail.component.css']
})
export class TongbukedetailComponent implements OnInit {

  constructor(private router : ActivatedRoute,private route:Router,private http:HttpClient) { }
  courseId:number;
  course;
  num=1;
  change(d){
    //console.log(event);
    //this.num=event.target.value;
    this.num=d;
  }
  jsonObject: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2]}};
  date:Date = new Date();
  ngOnInit() {
    this.courseId=this.router.snapshot.params['courseId'];
    this.http.get('/api/courses/'+this.courseId).
    //pipe(map(data=>{
    //   //data.name="haha";
    //   return data;})).
    //pipe(filter(data=>{
    //   return data.id==3;
    // })).
    subscribe((data)=>{
      this.course=data;
      // if(this.courseId==1){

      // }
    })
    //异步管道来写
    //this.course=this.http.get('/api/courses/'+this.courseId);
  }

}

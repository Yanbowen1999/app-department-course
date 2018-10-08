import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router'
@Component({
  selector: 'app-tongbu',
  templateUrl: './tongbu.component.html',
  styleUrls: ['./tongbu.component.css']
})
export class TongbuComponent implements OnInit {

  constructor(private router : ActivatedRoute,private route:Router) { }
  courseId:number;
  ngOnInit() {
    //this.courseId=this.router.snapshot.params['courseId'];
    this.router.params.subscribe((params)=>{
      this.courseId=params['courseId'];
    });
  }
  go(){
    this.route.navigate(['/tongbu',600],{queryParams:{id:1000}});
  }

}

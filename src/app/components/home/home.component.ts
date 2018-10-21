import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient) { }

  //timer=null;
  //course;
  headers=new HttpHeaders();
  ngOnInit() {
    // this.timer=setInterval(function(){
    //   console.log(11);
    // },1000);
    // this.http.get("/api/courses/").subscribe((data)=>{
    //   //this.course=data;
    //   console.log(data);
    // });
    // this.http.post('/api',{name:'yan',pwd:123},{headers:this.headers}).subscribe((data)=>{
    //   console.log(data);
    //});
  }

}
export class Users{
  constructor(
    public id:number,
    public image:string,
    public usereName:string,
    public fans:number,
    public focus:number){
  }
}
const user=[new Users(1,"http://usercontent.edu2act.cn/media/userheader/17-03-02/Sq9cqgi34ZCCoCyZZazkLP.jpg?imageView2/1/w/120/h/120",
"ybw",0,0)];
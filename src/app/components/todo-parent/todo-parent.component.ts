import { Component, OnInit, } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-todo-parent',
  templateUrl: './todo-parent.component.html',
  styleUrls: ['./todo-parent.component.css']
})
export class TodoParentComponent implements OnInit {
 
  arr:Object[]=[];
  addValue(e){ 
      this.arr.push({title:e,done:false});
      this.local.set('list',JSON.stringify(this.arr));
  } 
  counter:number=0;
  // count(){
  //   this.counter=0;
  //   this.arr.forEach((value,i)=>{
  //     if(value.done){
  //       this.counter++;
  //     }
  //   });
  //   this.local.set('list2',this.counter);
  // }
  // delete(idx){
  //   this.arr.splice(idx,1);
  //   this.local.set('list',JSON.stringify(this.arr));
  //   this.count();
  // }
  // change(idx){
  //   this.arr[idx].done=!this.arr[idx].done;
  //   this.local.set('list',JSON.stringify(this.arr));
  //   this.count();
  // }

    ngOnInit() {
      if(this.local.get('list')){
        this.arr= JSON.parse(this.local.get('list'));
      }
      else{
        this.arr=[];
      }
    }
  constructor(private local:CommonService) { }

  
}

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

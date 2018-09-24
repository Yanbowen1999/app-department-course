import { Component, OnInit,Input,Output ,EventEmitter} from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-todo-child2',
  templateUrl: './todo-child2.component.html',
  styleUrls: ['./todo-child2.component.css']
})
export class TodoChild2Component implements OnInit {
  @Input() data;
  //@Output()  changeI =new EventEmitter(); 
  //@Output()  delIndex =new EventEmitter(); 
  counter:number=0;
  count(){
    this.counter=0;
    this.data.forEach((value,i)=>{
      if(value.done){
        this.counter++;
      }
    });
    this.local.set('list2',this.counter);
  }
  delete(idx){
    this.data.splice(idx,1);
    this.local.set('list',JSON.stringify(this.data));
    this.count();
  }
change(idx){
    this.data[idx].done=!this.data[idx].done;
    this.local.set('list',JSON.stringify(this.data));
    this.count();
  }
  
  constructor(private local:CommonService) { }
  ngOnInit() {
    //localStorage.clear();
    if(this.local.get('list2')){
      this.counter= parseInt(this.local.get('list2'));
    }
    else{
      this.counter=0;
    }
  }

}

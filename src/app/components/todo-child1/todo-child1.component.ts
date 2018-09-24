import { Component, OnInit ,Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo-child1',
  templateUrl: './todo-child1.component.html',
  styleUrls: ['./todo-child1.component.css']
})
export class TodoChild1Component implements OnInit {
 
  @Output() getVal =new EventEmitter();
  addValue(e){
     this.getVal.emit(e);//传递数据
  }
  todo:string;
  getValue(e){ 
    if(e.keyCode==13){
      this.addValue(this.todo);
      this.todo='';
    }
  }
  
  constructor() { }

  ngOnInit() {
  }

}


import { Component, OnInit,Input,Output ,EventEmitter} from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-todo-child2',
  templateUrl: './todo-child2.component.html',
  styleUrls: ['./todo-child2.component.css']
})
export class TodoChild2Component implements OnInit {
  @Input() data;
  @Input() count;
  @Output()  changeI =new EventEmitter(); 
  @Output()  delIndex =new EventEmitter(); 
 
  change(i){
    this.changeI.emit(i);
  }
  delete(i){
    this.delIndex.emit(i);
  }
  counter:number=0;

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

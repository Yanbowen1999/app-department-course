import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private local:CommonService) { }

   todo:string;
  todoList:string[]=[];
  doneList:string[]=[];
  fun(e){
    let todoobj={
      todo:this.todo,
      done:false
    }
    if(e.keyCode==13){
      this.todoList.push(this.todo);
      this.todo=null;
    }
  }
  del(idx,done){
    if(done){
      this.todoList.splice(idx,1);
      this.local.set('list0',this.todoList);
    }
    else{
      this.doneList.splice(idx,1);
      this.local.set('list1',this.doneList);
    };
    
  }
  change(idx,done){
    if(done){
      var Ttodo=this.todoList[idx];
      this.doneList.push(Ttodo);
      this.local.set('list1',this.doneList);
      this.del(idx,true);
    }else{
      var Ttodo=this.doneList[idx];
      this.todoList.push(Ttodo);
      this.local.set('list0',this.todoList);
      this.del(idx,false)
    }
  }

  ngOnInit() {
    if(this.local.get('list0')){
      this.todoList=this.local.get('list0').split(',');
    }
    if(this.local.get('list1')){
      this.doneList=this.local.get('list1').split(',');
    }
  }
  

  //老师的code
  //method1
  // txt:string;
  // arr:string[]=[];
  // arr1:string[]=[];
  // getValue(e){
  //   if(e.keyCode==13){
  //     this.arr.push(this.txt);
  //     console.log(this.arr);
  //     this.txt='';
  //   }
  // }
  // delete(idx){
  //   this.arr.splice(idx,1)
  // }
  // delete1(idx){
  //   this.arr1.splice(idx,1)
  // }
  // change(idx){
  //   this.arr1.push(this.arr[idx])
  //   this.arr.splice(idx,1);
  // }
  // change1(idx){
  //   this.arr.push(this.arr1[idx])
  //   this.arr1.splice(idx,1);
  // }
//method2
// txt:string;
// arr:Msg[]=[];
// counter:number=0;
// getValue(e){
//     if(e.keyCode==13){
//       this.arr.push(new Msg(this.txt,false));
//       this.txt='';
//       this.count();
//     }
//   } 
// count(){
//   this.counter=0;
//   this.arr.forEach((value,index)=>{
//     if(value.done){
//       this.counter++;
//     }
//   });
// }

//  delete(idx){
//     this.arr.splice(idx,1);
//     this.count()
//   }
//    change(idx){
//     this.arr[idx].done=!this.arr[idx].done;
//     this.count()
//   }
}
// export class Msg{//声明类
//   constructor(public title: string,public done: boolean){}
// }//export模块引入，加不加都行



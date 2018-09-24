import { Component, OnInit, Input, Output,EventEmitter,SimpleChanges, OnChanges } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  implements OnInit,OnChanges{

  //2018/09/18
   @Input() arr:Array<any>;//Array<any>可省略,<T>写类型，不确定时写any
   @Input() arr1:Array<any>;
  // //组件交互@Input 加属性名
  @Output() delIndex =new EventEmitter<number>();//<T>给定一个类型number,string...可以检测下面传入参数是否错误
  //                ：EventEmitter<number>可写可不写      声明一个事件发射器  
  del(i){
    this.delIndex.emit(i);//this.eventName.emit(data)//传递数据
  }
  index=0;
  log(msg){
    console.log(`这是${this.index++}次调用,调用的钩子是${msg}`);
  }
  constructor() { 
  //  this.log('constructor');
   // console.log(this.arr);
  }

  ngOnChanges(changes:SimpleChanges):void{
    console.log(changes);
    for(let item in changes){
      console.log(changes[item].currentValue);
      for(let i in changes[item]){
        console.log(`属性名是${i},属性值是${changes[item][i]}`);
      }
    }
  }
  ngOnInit() {
    //页面初始化操作
    //this.log("ngOnInit");
  }
  // ngDoCheck():void{//任何改变都会被检测，所以函数尽量精简
  //   this.log("ngDOCheck");
  // }
  ngAfterContentInit(){
    //this.log("ngAfterContentInit");
  }
   ngAfterContentChecked():void{
  //   this.log("ngAfterContentChecked");
   }
  ngAfterViewInit(){
    setTimeout(()=>{},0)
    //this.log("ngAfterViewInit");
  }
  // ngAfterViewChecked(){
  //   this.log("ngAfterViewChecked");
  // }

}

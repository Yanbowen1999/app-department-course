import { Component, OnInit, } from '@angular/core';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  providers:[ShareService],//也可以在当前组件配置声明，在组件内直接调用
})
export class ParentComponent implements OnInit {

   //2018/09/18
  // data=[1,2,3,4,5,6];
  // data1;
  // del(i){
  //   this.data1.splice(i,1);
  //   this.local.set('list',this.data1); 
  // }
  constructor(private share:ShareService) { }
  add(){
    this.share.add(100);
  }
  ngOnInit() {
  //   if(this.local.get('list')){
  //     this.data1=this.local.get('list').split(',');
  // }else{
  //   this.data1=['a','b','c','d'];
  // }
    //this.local.set('name','liu');
    // setTimeout(()=>{this.data=this.data1},1000);
    //setInterval(()=>{this.data.push(2)},1000);
  }

}

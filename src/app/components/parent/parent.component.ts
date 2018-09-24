import { Component, OnInit, } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

   //2018/09/18
  data=[1,2,3,4,5,6];
  data1;
  del(i){
    this.data1.splice(i,1);
    this.local.set('list',this.data1); 
  }
  constructor(private local:CommonService) { }
  
  ngOnInit() {
    if(this.local.get('list')){
      this.data1=this.local.get('list').split(',');
  }else{
    this.data1=['a','b','c','d'];
  }
    //this.local.set('name','liu');
    // setTimeout(()=>{this.data=this.data1},1000);
    //setInterval(()=>{this.data.push(2)},1000);
  }

}

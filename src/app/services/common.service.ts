import { Injectable } from '@angular/core';

@Injectable({//可注入的，可以不写 
  providedIn: 'root'
})
export class CommonService {
//类中只声明函数
  constructor() {
    //构造器，函数使用，可以写
   }
  set(key,value){
    localStorage.setItem(key,value);
  }
  get(key){
    return localStorage.getItem(key);
  }
}

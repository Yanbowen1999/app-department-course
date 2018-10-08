import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { ComponentNameComponent } from './components/componentName/component-name.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { CommonService} from 'src/app/services/common.service';
import { Common2Service} from 'src/app/services/common2.service';
import {ShareService} from './services/share.service';
import { TodoParentComponent } from './components/todo-parent/todo-parent.component';
import { TodoChild1Component } from './components/todo-child1/todo-child1.component';
import { TodoChild2Component } from './components/todo-child2/todo-child2.component';
import {RouterModule} from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TongbuComponent } from './components/tongbu/tongbu.component';
import { CourseComponent } from './components/course/course.component';
import { ShequComponent } from './components/shequ/shequ.component';
import { AppRoutingModule } from './/app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    ComponentNameComponent,
    TodoListComponent,
    ChildComponent,
    ParentComponent,
    TodoParentComponent,
    TodoChild1Component,
    TodoChild2Component,
    HeaderComponent,
    HomeComponent,
    TongbuComponent,
    CourseComponent,
    ShequComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent,
      // children:[
      //   {path:'',component:}]
      },
      {path:'tongbu/:courseId',component:TongbuComponent},
      {path:'course',component:CourseComponent},
      {path:'shequ',component:ShequComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:"**",component:ShequComponent},
    ]),
    AppRoutingModule,
  ],
  providers: [CommonService,ShareService],
  //providers:[{provide:CommonService,useClass:Common2Service}],
  bootstrap: [AppComponent]
})
export class AppModule { }

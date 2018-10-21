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
import {HttpClientModule} from "@angular/common/http";
import { TongbukedetailComponent } from './components/tongbukedetail/tongbukedetail.component';
import { TaskComponent } from './components/task/task.component';
import { TbkComponent } from './components/tbk/tbk.component';
import { LittecourseComponent } from './components/littecourse/littecourse.component';
import { QieshuoComponent } from './components/qieshuo/qieshuo.component';
import { NoticeComponent } from './components/notice/notice.component';
import { TaskUncommitComponent } from './components/task-uncommit/task-uncommit.component';
import { TaskDoneComponent } from './components/task-done/task-done.component';
import { TaskEndComponent } from './components/task-end/task-end.component';
import { APipe } from './pipes/a.pipe';
import { CodetailComponent } from './components/codetail/codetail.component';
import { LicstudyingComponent } from './components/licstudying/licstudying.component';
import { LicmyfocusComponent } from './components/licmyfocus/licmyfocus.component';
import { LicmyseenComponent } from './components/licmyseen/licmyseen.component';
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
    ShequComponent,
    TongbukedetailComponent,
    TaskComponent,
    TbkComponent,
    LittecourseComponent,
    QieshuoComponent,
    NoticeComponent,
    TaskUncommitComponent,
    TaskDoneComponent,
    TaskEndComponent,
    APipe,
    CodetailComponent,
    LicstudyingComponent,
    LicmyfocusComponent,
    LicmyseenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent,
      children:[
        {path:'task',component:TaskComponent,
        children:[
          {path:'taskUncommit',component:TaskUncommitComponent},
          {path:'taskDone',component:TaskDoneComponent},
          {path:'taskEnd',component:TaskEndComponent},
          {path:'',redirectTo:'taskUncommit',pathMatch:'full'},
        ]
      },
        {path:'tbk',component:TbkComponent},
        {path:'littecourse',component:LittecourseComponent,
          children:[
            {path:'licstudy',component:LicstudyingComponent},
            {path:'licmyfocus',component:LicmyfocusComponent},
            {path:'licmyseen',component:LicmyseenComponent},
            {path:'',redirectTo:'licstudy',pathMatch:'full'},
          ]
      },
        {path:'qieshuo',component:QieshuoComponent},
        {path:'notice',component:NoticeComponent},
        {path:'',redirectTo:'task',pathMatch:'full'},
      ]
      },
      {path:'tongbu',component:TongbuComponent},
      {path:'tongbu/:courseId',component:TongbukedetailComponent},
      {path:'course',component:CourseComponent},
      {path:'course/:courseId',component:CodetailComponent},
      {path:'shequ',component:ShequComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:"**",component:ShequComponent},
    ]),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [CommonService,ShareService],
  //providers:[{provide:CommonService,useClass:Common2Service}],
  bootstrap: [AppComponent]
})
export class AppModule { }

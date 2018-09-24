import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { ComponentNameComponent } from './components/componentName/component-name.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { CommonService} from 'src/app/services/common.service';
import { TodoParentComponent } from './components/todo-parent/todo-parent.component';
import { TodoChild1Component } from './components/todo-child1/todo-child1.component';
import { TodoChild2Component } from './components/todo-child2/todo-child2.component';
@NgModule({
  declarations: [
    AppComponent,
    ComponentNameComponent,
    TodoListComponent,
    ChildComponent,
    ParentComponent,
    TodoParentComponent,
    TodoChild1Component,
    TodoChild2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }

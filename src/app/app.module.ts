import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { StudyTodoFormComponent } from './study-todo-form/study-todo-form.component';
import { StudyTodoListComponent } from './study-todo-list/study-todo-list.component';
import { DailytodoListComponent } from './dailytodo-list/dailytodo-list.component';
import { DailytodoFormComponent } from './dailytodo-form/dailytodo-form.component';
import { OfficetodoListComponent } from './officetodo-list/officetodo-list.component';
import { OfficetodoFormComponent } from './officetodo-form/officetodo-form.component';
import { Todo1ListComponent } from './todo1-list/todo1-list.component';
import { Todo1FormComponent } from './todo1-form/todo1-form.component';




@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoListComponent,
    StudyTodoFormComponent,
    StudyTodoListComponent,
    DailytodoListComponent,
    DailytodoFormComponent,
    OfficetodoListComponent,
    OfficetodoFormComponent,
    Todo1ListComponent,
    Todo1FormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    FormsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

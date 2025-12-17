import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from '../model/todo';
import { TodoService } from '../services/todo.service';
import { UuidService } from '../uuid.service';
import { SnackbarService } from '../snackbar.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
 
  @ViewChild('todoForm') todoForm ! : NgForm
  private _todoService=inject(TodoService)
  private _uuIdService =inject(UuidService)
  private _snackBarService = inject(SnackbarService)
  isEdit:boolean=false
  editObj!:Itodo

  constructor() { }

  ngOnInit(): void {
    this._todoService.editTodo$
    .subscribe(res=>{
      this.isEdit=true
      console.log('Get Edit Object',res);
      this.editObj=res
      this.todoForm.form.patchValue(res)
    })
  }
  
  ontodoAdd(){
    if(this.todoForm.valid){
     let obj:Itodo = {...this.todoForm.value,todoId:this._uuIdService.uuid()}
     console.log(obj);
     this.todoForm.reset()
     this._todoService.createTodo(obj)
       .subscribe({
        next:res=>{
          console.log(res);
          this._snackBarService.openSnackBar(`The todo item ${res.todoItem} added successfully !!!`)
        },
        error:err=>{
          console.log(err);
          this._snackBarService.openSnackBar(`Something went wrong !!!`)
        }
       })
    }
  }
  
  onUpdate(){
    if(this.todoForm.valid){
      let UPDATED_OBJ:Itodo={
      ...this.todoForm.value,todoId:this.editObj.todoId
    }
    console.log(UPDATED_OBJ);
    this._todoService.updateTodo(UPDATED_OBJ)
    .subscribe({
      next:res=>{
        console.log(res);
        this.todoForm.reset()
        this.isEdit=false
        this._snackBarService.openSnackBar(`Todo Item with Id ${UPDATED_OBJ.todoId} is updated successfully !!!`)
        
      }
    })
    
    }
    
  }

}

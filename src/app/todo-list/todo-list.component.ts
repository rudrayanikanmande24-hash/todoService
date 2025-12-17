import { Component, OnInit } from '@angular/core';
import { Itodo } from '../model/todo';
import { TodoService } from '../services/todo.service';
import { SnackbarService } from '../snackbar.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoArr:Itodo[]=[]
  
  constructor(
    private _todoService : TodoService,
    private _snackBarService : SnackbarService
  ) { }

  ngOnInit(): void {
    this._todoService.fetchAllTodos()
      .subscribe(res=>{
        this.todoArr=res
      })
    console.log(this.todoArr);
    
  }

  onRemove(todoId:string){
    console.log(todoId);
    this._todoService.removeTodo(todoId)
     .subscribe({
      next:(res)=>{
        console.log(res);
        this._snackBarService.openSnackBar(`The todo item with id ${res} is removed successfully`)
      }
     })
  }
  
  onEdit(todo:Itodo){
    console.log(todo);
    this._todoService.editTodo$.next(todo)
    
    
  }

}

import { Injectable } from "@angular/core";
import { Itodo } from "../model/todo";
import { Observable, of, Subject } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class TodoService{
  todoArr:Array<Itodo>=[
    {
        todoItem:'JS',
        todoId:'123'
    },{
        todoItem:'HTML',
        todoId:'124'
    },{
        todoItem:'CSS',
        todoId:'125'
    },{
        todoItem:'Angular',
        todoId:'126'
    }
  ]

  editTodo$ : Subject<Itodo> = new Subject()

  fetchAllTodos():Observable<Array<Itodo>>{
    return of(this.todoArr)
  }

  createTodo(todo:Itodo):Observable<Itodo>{
    this.todoArr.push(todo)
    return of(todo)
  }

  removeTodo(id:string):Observable<string>{
    let i = this.todoArr.findIndex(p=>p.todoId === id)
    this.todoArr.splice(i,1)
    console.log(this.todoArr);
    return of(id)
    
  }
 
  updateTodo(updatedObj:Itodo):Observable<Itodo>{
  let i = this.todoArr.findIndex(t=>t.todoId === updatedObj.todoId)
  this.todoArr[i]=updatedObj;
  
  return of(updatedObj)
  }
  

}
import { Injectable } from '@angular/core';
import { Itodo } from './model/todo';
import { Observable,  of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DailyService {

  editObj$ : Subject<Itodo> = new Subject

  dailyTodoArr:Array<Itodo> = [
  { todoItem: 'Wake up early', todoId: '301' },
  { todoItem: 'Exercise', todoId: '302' },
  { todoItem: 'Read book', todoId: '303' },
  { todoItem: 'Practice coding', todoId: '304' }
];

  fetchAllTodo():Observable<Itodo[]>{
    return of(this.dailyTodoArr)
  } 
  
  createDaily(todo:Itodo):Observable<Itodo>{
    this.dailyTodoArr.push(todo)
    return of(todo)
  }

  removeDailyT(id:string):Observable<string>{
       let i = this.dailyTodoArr.findIndex(p=>p.todoId === id)
       this.dailyTodoArr.splice(i,1)
       return of(id)
  }

  updateDaily(updateObj:Itodo):Observable<Itodo>{
    let i = this.dailyTodoArr.findIndex(p=>p.todoId === updateObj.todoId)
    this.dailyTodoArr[i]=updateObj
    return of(updateObj)
  }

  constructor() { }
}

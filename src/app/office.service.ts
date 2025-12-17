import { Injectable } from '@angular/core';
import { Itodo } from './model/todo';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  officeTodoArr: Array<Itodo> = [
  { todoItem: 'Team meeting', todoId: '401' },
  { todoItem: 'Fix bugs', todoId: '402' },
  { todoItem: 'Code review', todoId: '403' },
  { todoItem: 'Deploy build', todoId: '404' }
];

 editOffice$ : Subject<Itodo> = new Subject

  constructor() { }

  fetchAllTodo():Observable<Itodo[]>{
    return of(this.officeTodoArr)
  }

  createOfficeT(t:Itodo):Observable<Itodo>{
    this.officeTodoArr.push(t)
    return of(t)
  }
  

  reomoveOffice(id:string):Observable<string>{
    let i = this.officeTodoArr.findIndex(p=>p.todoId === id)
    this.officeTodoArr.splice(i,1)
    return of(id)
  }

  updateOffic(UpdatedObj:Itodo):Observable<Itodo>{
  let i = this.officeTodoArr.findIndex(p=>p.todoId === UpdatedObj.todoId)
  this.officeTodoArr[i]=UpdatedObj
  return of(UpdatedObj)
  }


}

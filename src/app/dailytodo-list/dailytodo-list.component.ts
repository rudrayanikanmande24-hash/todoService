import { Component, OnInit } from '@angular/core';
import { Itodo } from '../model/todo';
import { DailyService } from '../daily.service';
import { SnackbarService } from '../snackbar.service';

@Component({
  selector: 'app-dailytodo-list',
  templateUrl: './dailytodo-list.component.html',
  styleUrls: ['./dailytodo-list.component.scss']
})
export class DailytodoListComponent implements OnInit {

  dailyTodoArr:Itodo[]=[]

  constructor(
    private _dailyService : DailyService,
    private _snackBarService : SnackbarService
  ) { }

  ngOnInit(): void {
    this._dailyService.fetchAllTodo()
     .subscribe(res=>{
      this.dailyTodoArr=res
     })
     console.log(this.dailyTodoArr);
     
  }


  onRemove(todoId:string){
    console.log(todoId);
    this._dailyService.removeDailyT(todoId)
    .subscribe({
      next:(res)=>{
        console.log(res);
        this._snackBarService.openSnackBar(`The Tod Item with Id ${res} is reomoved successfully`)
      }
    })
  }

  onEdit(t:Itodo){
  console.log(t);
  this._dailyService.editObj$.next(t)
  }
}

import { Component, OnInit } from '@angular/core';
import { Itodo } from '../model/todo';
import { StudyService } from '../study.service';
import { SnackbarService } from '../snackbar.service';

@Component({
  selector: 'app-study-todo-list',
  templateUrl: './study-todo-list.component.html',
  styleUrls: ['./study-todo-list.component.scss']
})
export class StudyTodoListComponent implements OnInit {
  
  studyTodoArr:Itodo[]=[]

  constructor(
    private _studyTodoServcie : StudyService,
    private _snackBarService : SnackbarService
  ) { }

  ngOnInit(): void {
    this._studyTodoServcie.fetchAllSTodo()
    .subscribe(res=>{
      this.studyTodoArr=res
    })
    console.log(this.studyTodoArr);
    
  }

  onEdit(s:Itodo){
    console.log(s);
    this._studyTodoServcie.editStudyT.next(s)
    
  }

  onRemove(s:string){
    console.log(s);
    this._studyTodoServcie.reoveStud(s)
    .subscribe({
      next:(res)=>{
        console.log(res);
        this._snackBarService.openSnackBar(`The todo item with Id ${res} is removed successfully`)
      }
    })
  }

}

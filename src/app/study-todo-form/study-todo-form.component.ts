import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { StudyService } from '../study.service';
import { NgForm } from '@angular/forms';
import { UuidService } from '../uuid.service';
import { Itodo } from '../model/todo';
import { SnackbarService } from '../snackbar.service';

@Component({
  selector: 'app-study-todo-form',
  templateUrl: './study-todo-form.component.html',
  styleUrls: ['./study-todo-form.component.scss']
})
export class StudyTodoFormComponent implements OnInit {

  @ViewChild('studyForm') studyForm ! : NgForm

  private _studyTodoService = inject(StudyService)
  private _uuidService = inject(UuidService)
  private _snackbarService = inject(SnackbarService)
  isEdit:boolean=false
  editObj ! : Itodo

  constructor() { }

  ngOnInit(): void {
    this._studyTodoService.editStudyT
    .subscribe(res=>{
      this.isEdit=true
      console.log('Get Edit Object',res);
      this.editObj=res;
      this.studyForm.form.patchValue(res)
      
    })
  }

  ontodoAdd(){
    if(this.studyForm.valid){

      let obj={
         ...this.studyForm.value,todoId:this._uuidService.uuid()
      }
      console.log(obj);
      this.studyForm.reset()
      this._studyTodoService.createStudyT(obj)
       .subscribe({
        next:res=>{
          console.log(res);
          this._snackbarService.openSnackBar(`The todo Item ${res.todoItem} added successfully !!!`)
        },
        error:err=>{
          console.log(err);
          this._snackbarService.openSnackBar(`Something went wrong !!!`)
          
        }
       })
      
    }
  }

  onUpdate(){
     if(this.studyForm.valid){
      let Update_Obj:Itodo={
        ...this.studyForm.value,todoId:this.editObj.todoId
      }
      console.log(Update_Obj);
      this._studyTodoService.updateStudyT(Update_Obj)
      .subscribe({
        next:res=>{
          console.log(res);
          this.studyForm.reset()
          this.isEdit=false
          this._snackbarService.openSnackBar(`Todo Item with Id ${Update_Obj.todoId} is updated successfully !!!`)
          
        }
      })
     }
  }

}

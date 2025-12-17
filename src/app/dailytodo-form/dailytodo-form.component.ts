import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DailyService } from '../daily.service';
import { UuidService } from '../uuid.service';
import { SnackbarService } from '../snackbar.service';
import { Itodo } from '../model/todo';

@Component({
  selector: 'app-dailytodo-form',
  templateUrl: './dailytodo-form.component.html',
  styleUrls: ['./dailytodo-form.component.scss']
})
export class DailytodoFormComponent implements OnInit {
@ViewChild('todoForm') todoForm ! : NgForm
private _dailyServoce = inject(DailyService)
private _uuildService = inject(UuidService)
private _snackBarService = inject(SnackbarService)
editObj ! : Itodo
isEdit:boolean=false


  constructor() { }

  ngOnInit(): void {
   this._dailyServoce.editObj$
   .subscribe(res=>{
    this.isEdit=true
    console.log('Get Edit Object',res);
    this.editObj=res
    this.todoForm.form.patchValue(res)
   })
  }

  onTodoAdd(){
    if(this.todoForm.valid){
      let obj:Itodo={
        ...this.todoForm.value,todoId:this._uuildService.uuid()
      }
      console.log(obj);
      this.todoForm.reset()
      this._dailyServoce.createDaily(obj)
      .subscribe({
        next:res=>{
          console.log(res);
          this._snackBarService.openSnackBar(`The todo Item ${res} added successfullt !!!`)
          
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
      this._dailyServoce.updateDaily(UPDATED_OBJ)
      .subscribe({
        next:res=>{
          console.log(res);
          this.todoForm.reset()
          this.isEdit=false
          this._snackBarService.openSnackBar(`Todo Item with id ${UPDATED_OBJ.todoId} is updated successfully !!!`)
        }
      })
    }
  }

}

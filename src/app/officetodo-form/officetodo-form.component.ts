import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OfficeService } from '../office.service';
import { UuidService } from '../uuid.service';
import { SnackbarService } from '../snackbar.service';
import { Itodo } from '../model/todo';

@Component({
  selector: 'app-officetodo-form',
  templateUrl: './officetodo-form.component.html',
  styleUrls: ['./officetodo-form.component.scss']
})
export class OfficetodoFormComponent implements OnInit {

  @ViewChild('todoForm') todoForm ! : NgForm
  private _officeTodoService = inject(OfficeService)
  private _uuidService = inject(UuidService)
  private _snackBarService = inject(SnackbarService)
  isEdit:boolean=false
  editObj!:Itodo
  constructor() { }

  ngOnInit(): void {
    this._officeTodoService.editOffice$
    .subscribe(res=>{
      this.isEdit=true
      console.log('Get Edit object',res);
      this.editObj=res
      this.todoForm.form.patchValue(res)
    })
  }

  ontodoAdd(){
    if(this.todoForm.valid){
      let obj={...this.todoForm.value,todoId:this._uuidService.uuid()}
      console.log(obj);
      this.todoForm.reset()
      this._officeTodoService.createOfficeT(obj)
      .subscribe({
        next:res=>{
          console.log(res);
          this._snackBarService.openSnackBar(`The todo Item ${res.todoItem} added successfully !!!`)
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
      let UpdatedObj:Itodo={
        ...this.todoForm.value,todoId:this.editObj.todoId
      }
      console.log(UpdatedObj);
      this._officeTodoService.updateOffic(UpdatedObj)
      .subscribe({
        next:res=>{
          console.log(res);
          this.todoForm.reset()
          this.isEdit=false
          this._snackBarService.openSnackBar(`TOdo Item with id ${UpdatedObj.todoId} is updted successfully!!!`)
        }
      })
    }
  }

}

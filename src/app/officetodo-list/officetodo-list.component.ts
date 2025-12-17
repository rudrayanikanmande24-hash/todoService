import { Component, OnInit } from '@angular/core';
import { Itodo } from '../model/todo';
import { OfficeService } from '../office.service';
import { SnackbarService } from '../snackbar.service';

@Component({
  selector: 'app-officetodo-list',
  templateUrl: './officetodo-list.component.html',
  styleUrls: ['./officetodo-list.component.scss']
})
export class OfficetodoListComponent implements OnInit {

  officeTodoArr:Itodo[]=[]

  constructor(
    private _officeService : OfficeService,
    private _snackBarService : SnackbarService
  ) { }

  ngOnInit(): void {
    this._officeService.fetchAllTodo()
    .subscribe(res=>{
      this.officeTodoArr=res
      console.log(this.officeTodoArr);
    })
    
    
  }

  onEdit(t:Itodo){
    console.log(t);
    this._officeService.editOffice$.next(t)
  }

  onRemove(t:string){
    console.log(t);
    this._officeService.reomoveOffice(t)
    .subscribe({
      next:(res)=>{
        console.log(res);
        this._snackBarService.openSnackBar(`The todo item with id ${res} is removed successfully`)
      }
    })
  }


}

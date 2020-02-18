import { Component, OnInit, ViewChild } from '@angular/core';
import { DoctorsService } from 'app/shared/services/doctors.service';
import { MatDialog, MatTableDataSource, MatSort, MatPaginator, MatDialogConfig } from '@angular/material';
import { DialogService } from 'app/shared/services/dialog.service';
import { DoctorsComponent } from '../doctors/doctors.component';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.scss']
})
export class DoctorsListComponent implements OnInit {
  searchKey: string;
  array: any;

  constructor(private service: DoctorsService,
    private dialog: MatDialog,
    private dialogService: DialogService) { }

    listData: MatTableDataSource<any>;
    displayedColumns: string[] = ['userName', 'fullName','position', 'email', 'tellNo', 'nic','actions'];

    @ViewChild(MatSort, {static:true}) sort: MatSort;
  @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;
  
  ngOnInit() {
    this.service.getDoctors().subscribe(
      list => {
        let array = list.map(item =>{
          return {
            $key: item.key,
            ...item.payload.val()
          };
          
        });
        this.listData = new MatTableDataSource(array);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
        
        
      }
    );
  }

  onSearchClear(){
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter(){
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  onCreate(){
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "40%";
    this.dialog.open(DoctorsComponent, dialogConfig);
  }

  onEdit(row){
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "40%";
    this.dialog.open(DoctorsComponent, dialogConfig);
  }

  onDelete($key){
    
    this.dialogService.openConfirmDialog('Are you sure to delete this user?')
    .afterClosed().subscribe(res => {
      if(res){
        this.service.deleteDoctors($key);
        
      }
    });
     
  }

}

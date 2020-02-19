import { Component, OnInit, ViewChild } from '@angular/core';
import { PatientService } from 'app/shared/services/patient.service';
import { MatDialog, MatTableDataSource, MatSort, MatPaginator, MatDialogConfig } from '@angular/material';
import { DialogService } from 'app/shared/services/dialog.service';
<<<<<<< HEAD
import { NotificationsService } from 'app/shared/services/notifications.service';
=======
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
import { PatientsComponent } from '../patients/patients.component';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss']
})
export class PatientsListComponent implements OnInit {

  searchKey: string;
  array: any;

  constructor(private service: PatientService,
    private dialog: MatDialog,
<<<<<<< HEAD
    private notificationService: NotificationsService,
    private dialogService: DialogService
=======
     private dialogService: DialogService
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
    ) { }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['userName', 'fullName', 'email', 'tellNo', 'nic','actions'];

  @ViewChild(MatSort, {static:true}) sort: MatSort;
  @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;

  ngOnInit() {
    
    this.service.getPatients().subscribe(
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
    this.dialog.open(PatientsComponent, dialogConfig);
  }

  onEdit(row){
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "40%";
    this.dialog.open(PatientsComponent, dialogConfig);
  }

  onDelete($key){
    
    this.dialogService.openConfirmDialog('Are you sure to delete this user?')
    .afterClosed().subscribe(res => {
      if(res){
        this.service.deletePatients($key);
<<<<<<< HEAD
        this.notificationService.warn('Deleted Successfully');
=======
        
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
      }
    });
     
  }
}


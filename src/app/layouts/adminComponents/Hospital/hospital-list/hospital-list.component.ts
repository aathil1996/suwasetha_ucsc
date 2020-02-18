import { Component, OnInit, ViewChild } from '@angular/core';
import { HospitalService } from 'app/shared/services/hospital.service';
import { MatDialog, MatTableDataSource, MatSort, MatPaginator, MatDialogConfig } from '@angular/material';
import { NotificationsService } from 'app/shared/services/notifications.service';
import { DialogService } from 'app/shared/services/dialog.service';
import { HospitalsComponent } from '../hospitals/hospitals.component';

@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.scss']
})
export class HospitalListComponent implements OnInit {

  searchKey: string;
  array: any;

  constructor(private service: HospitalService,
    private dialog: MatDialog,
    private notificationService: NotificationsService,
    private dialogService: DialogService
    ) { }

    listData: MatTableDataSource<any>;
    displayedColumns: string[] = ['hospitalName', 'hosCategory', 'hosEmail', 'hosTellNo', 'hospitalAddress','hospitalDistrict', 'hospitalProvince','actions' ];
  
    @ViewChild(MatSort, {static:true}) sort: MatSort;
    @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;

    ngOnInit() {
      this.service.getHospitals().subscribe(
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
      this.dialog.open(HospitalsComponent, dialogConfig);
    }
  
    onEdit(row){
      this.service.populateForm(row);
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.disableClose = true;
      dialogConfig.width = "40%";
      this.dialog.open(HospitalsComponent, dialogConfig);
    }
  
    onDelete($key){
      
      this.dialogService.openConfirmDialog('Are you sure to delete this user?')
      .afterClosed().subscribe(res => {
        if(res){
          this.service.deleteHospital($key);
          this.notificationService.warn('Deleted Successfully');
        }
      });
       
    }

}

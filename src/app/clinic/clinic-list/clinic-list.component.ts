import { Component, OnInit } from '@angular/core';
import { ClinicService } from 'app/shared/services/clinic.service';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
import { NotificationsService } from 'app/shared/services/notifications.service';
import { DialogService } from 'app/shared/services/dialog.service';
import { ClinicComponent } from 'app/clinic/clinic.component';

@Component({
  selector: 'app-clinic-list',
  templateUrl: './clinic-list.component.html',
  styleUrls: ['./clinic-list.component.scss']
})
export class ClinicListComponent implements OnInit {
  searchKey: string;
  array: any

  constructor(
    private service: ClinicService,
    private dialog: MatDialog,
    private notificationService: NotificationsService,
    private dialogService: DialogService
  ) { }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = [ 'clinicName', 'date', 'hospital'];

  ngOnInit() {
    this.service.getClinic().subscribe(
      list => {
        let array = list.map(item =>{
          return {
            $key: item.key,
            ...item.payload.val()
          };
          
        });
        this.listData = new MatTableDataSource(array);
        //this.listData.sort = this.sort;
        //this.listData.paginator = this.paginator;
        
        
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
    this.dialog.open(ClinicComponent, dialogConfig);
  }

}

import { Component, OnInit,ViewChild } from '@angular/core';
import { BookappointmentService } from 'app/shared/services/bookappointment.service';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
import { NotificationsService } from 'app/shared/services/notifications.service';
import { DialogService } from 'app/shared/services/dialog.service';
import { BookappointmentComponent } from '../bookappointment.component';

@Component({
  selector: 'app-bookappointment-list',
  templateUrl: './bookappointment-list.component.html',
  styleUrls: ['./bookappointment-list.component.scss']
})
export class BookappointmentListComponent implements OnInit {
  searchKey: string;
  array: any

  constructor(
    private service: BookappointmentService,
    private dialog: MatDialog,
    private notificationService: NotificationsService,
    private dialogService: DialogService
  ) { }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['firstName', 'secondName', 'age','nic', 'date', 'hospital', 'clinic'];

  ngOnInit() {
    this.service.getBookAppointment().subscribe(
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
    this.dialog.open(BookappointmentComponent, dialogConfig);
  }

  

}

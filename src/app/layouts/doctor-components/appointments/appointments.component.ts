<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, OnInit, ViewChild } from '@angular/core';
import { AppointmentsService } from 'app/shared/services/appointments.service';
import { NotificationsService } from 'app/shared/services/notifications.service';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';

import { DialogService } from 'app/shared/services/dialog.service';



>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit() {
  }

}
=======
  searchKey: string;
  array: any;

  constructor(private service: AppointmentsService,
    private dialog: MatDialog,
    private notificationService: NotificationsService,
    private dialogService: DialogService
    ) { }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['age', 'clinic', 'date','firstName','hospital','nic','secondName'];

  @ViewChild(MatSort, {static:true}) sort: MatSort;
  @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;

  ngOnInit() {
    this.service.getAppointments().subscribe(
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

  }


>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e

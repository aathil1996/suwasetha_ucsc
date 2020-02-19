import { Component, OnInit, ViewChild } from '@angular/core';
import { HospitalService } from 'app/shared/services/hospital.service';
import { MatDialog, MatTableDataSource, MatSort, MatPaginator, MatDialogConfig } from '@angular/material';
import { NotificationsService } from 'app/shared/services/notifications.service';
import { DialogService } from 'app/shared/services/dialog.service';
import { BookingComponent } from '../booking/booking.component';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.scss']
})
export class BookingListComponent implements OnInit {
  searchKey: string;
  array: any;


  constructor(
    private service: HospitalService,
    private dialog: MatDialog,
    private notificationService: NotificationsService,
    private dialogService: DialogService
  ) { }

  listData: MatTableDataSource<any>;
    displayedColumns: string[] = ['hospitalName', 'hosCategory', 'hospitalAddress','actions' ];
  
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
    this.dialog.open(BookingComponent, dialogConfig);
  }

  onEdit(row){
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "40%";
    this.dialog.open(BookingComponent, dialogConfig);
  }

 

}

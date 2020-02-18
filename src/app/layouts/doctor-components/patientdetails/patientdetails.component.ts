import { Component, OnInit, ViewChild } from '@angular/core';
import { PatientDetailsService } from 'app/shared/services/patientdetails.service';
import { NotificationsService } from 'app/shared/services/notifications.service';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
import { UpdatepatientComponent} from '../patientdetails/updatepatient/updatepatient.component';

import { DialogService } from 'app/shared/services/dialog.service';

@Component({
  selector: 'app-patientdetails',
  templateUrl: './patientdetails.component.html',
  styleUrls: ['./patientdetails.component.scss']
})
export class PatientdetailsComponent implements OnInit {

  searchKey: string;
  array: any;

  constructor(private service: PatientDetailsService,
    private dialog: MatDialog,
    private notificationService: NotificationsService,
    private dialogService: DialogService
    ) { }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['fullName', 'nic', 'tellNo','actions'];

  @ViewChild(MatSort, {static:true}) sort: MatSort;
  @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;

  ngOnInit() {
    this.service.getPatientdetails().subscribe(
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

  onEdit(row){
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "40%";
    this.dialog.open(UpdatepatientComponent, dialogConfig);
  }

  onSearchClear(){
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter(){
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  }
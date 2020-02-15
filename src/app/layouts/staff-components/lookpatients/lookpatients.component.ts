import { Component, OnInit } from '@angular/core';
import { LookPatientsService } from 'app/shared/services/lookpatients.service';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
import { NotificationsService } from 'app/shared/services/notifications.service';
import { DialogService } from 'app/shared/services/dialog.service';

@Component({
  selector: 'app-lookpatients',
  templateUrl: './lookpatients.component.html',
  styleUrls: ['./lookpatients.component.scss']
})
export class LookPatientsComponent implements OnInit {
  searchKey: string;
  array: any;

  constructor(
    private service: LookPatientsService,
    private dialog: MatDialog,
    private notificationService: NotificationsService,
    private dialogService: DialogService
  ) { }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['nic', 'fullName', 'tellNo','email'];

  ngOnInit() {
    this.service.getLookpatients().subscribe(
      list => {
        let array = list.map(item =>{
          return {
            $key: item.key,
            ...item.payload.val()
          };
          
        });
        this.listData = new MatTableDataSource(array);
        //this.listData.sort = this.sort;
       // this.listData.paginator = this.paginator;
        
        
      }
    );
  }

}
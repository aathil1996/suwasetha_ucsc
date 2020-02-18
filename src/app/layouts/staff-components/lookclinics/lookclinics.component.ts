import { Component, OnInit } from '@angular/core';
import { LookClinicsService } from 'app/shared/services/lookclinics.service';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
import { NotificationsService } from 'app/shared/services/notifications.service';
import { DialogService } from 'app/shared/services/dialog.service';

@Component({
  selector: 'app-lookclinics',
  templateUrl: './lookclinics.component.html',
  styleUrls: ['./lookclinics.component.scss']
})
export class LookClinicsComponent implements OnInit {
  searchKey: string;
  array: any;

  constructor(
    private service: LookClinicsService,
    private dialog: MatDialog,
    private notificationService: NotificationsService,
    private dialogService: DialogService
  ) { }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['nic', 'medicine', 'dose'];

  ngOnInit() {
    this.service.getLookclinics().subscribe(
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
import { Component, OnInit, ViewChild } from '@angular/core';
import { StaffService } from 'app/shared/services/staff.service';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
import { NotificationsService } from 'app/shared/services/notifications.service';
import { DialogService } from 'app/shared/services/dialog.service';
import { StaffComponent } from '../add-staff/add-staff.component';

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit {
  searchKey: string;
  array: any;

  constructor(private service: StaffService,
    private dialog: MatDialog,
    private notificationService: NotificationsService,
    private dialogService: DialogService
    ) { }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['nic', 'name', 'telno','actions'];

  @ViewChild(MatSort, {static:true}) sort: MatSort;
  @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;

  ngOnInit() {
    this.service.getStaff().subscribe(
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
    this.dialog.open(StaffComponent, dialogConfig);
  }

  onEdit(row){
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "40%";
    this.dialog.open(StaffComponent, dialogConfig);
  }

  onDelete($key){
    
    this.dialogService.openConfirmDialog('Are you sure to delete this?')
    .afterClosed().subscribe(res => {
      if(res){
        this.service.deleteStaff($key);
        this.notificationService.warn('Deleted Successfully');
      }
    });
     
  }
}

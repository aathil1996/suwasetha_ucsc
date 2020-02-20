import { Component, OnInit, ViewChild } from '@angular/core';
import { SystemUsersService } from 'app/shared/services/system-users.service';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
import { SystemUsersComponent } from '../system-users/system-users.component';
import { NotificationsService } from 'app/shared/services/notifications.service';
import { DialogService } from 'app/shared/services/dialog.service';

@Component({
  selector: 'app-system-users-list',
  templateUrl: './system-users-list.component.html',
  styleUrls: ['./system-users-list.component.scss']
})
export class SystemUsersListComponent implements OnInit {
  searchKey: string;
  array: any;

  constructor(private service: SystemUsersService,
    private dialog: MatDialog,
    private dialogService: DialogService
    ) { }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['userName', 'fullName', 'email', 'tellNo', 'nic','actions'];

  @ViewChild(MatSort, {static:true}) sort: MatSort;
  @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;

  ngOnInit() {
    this.service.getSystemUsers().subscribe(
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
    this.dialog.open(SystemUsersComponent, dialogConfig);
  }

  onEdit(row){
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "40%";
    this.dialog.open(SystemUsersComponent, dialogConfig);
  }

  onDelete($key){
    
    this.dialogService.openConfirmDialog('Are you sure to delete this user?')
    .afterClosed().subscribe(res => {
      if(res){
        this.service.deleteSystemUsers($key);
        
      }
    });
     
  }
}

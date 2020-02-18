import { Component, OnInit, ViewChild } from '@angular/core';
import { ClinicAdminService } from 'app/shared/services/clinic-admin.service';
import { MatDialog, MatTableDataSource, MatSort, MatPaginator, MatDialogConfig } from '@angular/material';
import { DialogService } from 'app/shared/services/dialog.service';
import { ClinicAdminComponent } from '../clinic-admin/clinic-admin.component';

@Component({
  selector: 'app-clinic-admin-list',
  templateUrl: './clinic-admin-list.component.html',
  styleUrls: ['./clinic-admin-list.component.scss']
})
export class ClinicAdminListComponent implements OnInit {

  searchKey: string;
  array: any;
  
  constructor(private service: ClinicAdminService,
    private dialog: MatDialog,
    private dialogService: DialogService) { }

    listData: MatTableDataSource<any>;
    displayedColumns: string[] = ['userName', 'fullName', 'hospital', 'email','nic','actions'];
    @ViewChild(MatSort, {static:true}) sort: MatSort;
    @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;
  
    ngOnInit() {this.service.getClinicAdmins().subscribe(
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
    this.dialog.open(ClinicAdminComponent, dialogConfig);
  }

  onEdit(row){
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "40%";
    this.dialog.open(ClinicAdminComponent, dialogConfig);
  }

  onDelete($key){
    
    this.dialogService.openConfirmDialog('Are you sure to delete this user?')
    .afterClosed().subscribe(res => {
      if(res){
        this.service.deleteClinicAdmins($key);
        
      }
    });
     
  }

}

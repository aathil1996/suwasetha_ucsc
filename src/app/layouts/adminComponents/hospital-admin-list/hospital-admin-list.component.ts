import { Component, OnInit, ViewChild } from '@angular/core';
import { HospitalAdminService } from 'app/shared/services/hospital-admin.service';
import { MatDialog, MatTableDataSource, MatSort, MatPaginator, MatDialogConfig } from '@angular/material';
import { DialogService } from 'app/shared/services/dialog.service';
import { HospitalAdminComponent } from '../hospital-admin/hospital-admin.component';

@Component({
  selector: 'app-hospital-admin-list',
  templateUrl: './hospital-admin-list.component.html',
  styleUrls: ['./hospital-admin-list.component.scss']
})
export class HospitalAdminListComponent implements OnInit {

  searchKey: string;
  array: any;
  
  constructor(private service: HospitalAdminService,
    private dialog: MatDialog,
    private dialogService: DialogService) { }

    listData: MatTableDataSource<any>;
    displayedColumns: string[] = ['userName', 'fullName', 'hospital', 'email','nic','actions'];
    @ViewChild(MatSort, {static:true}) sort: MatSort;
    @ViewChild(MatPaginator, {static:true}) paginator: MatPaginator;
  
    ngOnInit() {this.service.getHospitalAdmin().subscribe(
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
    this.dialog.open(HospitalAdminComponent, dialogConfig);
  }

  onEdit(row){
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "40%";
    this.dialog.open(HospitalAdminComponent, dialogConfig);
  }

  onDelete($key){
    
    this.dialogService.openConfirmDialog('Are you sure to delete this user?')
    .afterClosed().subscribe(res => {
      if(res){
        this.service.deleteHospitalAdmin($key);
        
      }
    });
     
  }

}

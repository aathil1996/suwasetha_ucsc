import { Component, OnInit, ViewChild } from '@angular/core';
import { PatientService } from 'app/shared/services/patient.service';
import { MatDialog, MatTableDataSource, MatSort, MatPaginator, MatDialogConfig } from '@angular/material';
import { DialogService } from 'app/shared/services/dialog.service';
import { NotificationsService } from 'app/shared/services/notifications.service';
import { AddClinicsComponent } from '../add-clinics/add-clinics.component';
import { ClinicsService } from 'app/shared/services/clinics.service';

@Component({
  selector: 'app-clinics-list',
  templateUrl: './clinics-list.component.html',
  styleUrls: ['./clinics-list.component.scss']
})
export class ClinicsListComponent implements OnInit {

  searchKey: string;
  array: any;

  // tslint:disable-next-line: member-ordering
  listData: MatTableDataSource<any>;
  // tslint:disable-next-line: member-ordering
  displayedColumns: string[] = ['id', 'date', 'stime', 'etime', 'nod', 'actions'];

  // tslint:disable-next-line: member-ordering
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private service: ClinicsService,
    private dialog: MatDialog,
    private notificationService: NotificationsService,
    private dialogService: DialogService
    ) { }

  ngOnInit() {
    
    this.service.getClinics().subscribe(
      list => {
        let array = list.map(item => {
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
    this.dialog.open(AddClinicsComponent, dialogConfig);
  }

  onEdit(row){
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "40%";
    this.dialog.open(AddClinicsComponent, dialogConfig);
  }

  onDelete($key){
    
    this.dialogService.openConfirmDialog('Are you sure to delete this user?')
    .afterClosed().subscribe(res => {
      if (res){
        this.service.deleteClinics($key);
        this.notificationService.warn('Deleted Successfully');
      }
    });
     
  }
}


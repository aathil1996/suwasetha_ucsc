import { Component, OnInit } from '@angular/core';
import { ClinicService } from 'app/shared/services/clinic.service';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
import { NotificationsService } from 'app/shared/services/notifications.service';
import { DialogService } from 'app/shared/services/dialog.service';
import { MatDialogRef } from '@angular/material';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.scss']
})
export class ClinicComponent implements OnInit {
  searchKey: string;
  array: any

  constructor(
    private service : ClinicService,
    public notificationService: NotificationsService,
    public dialogRef: MatDialogRef<ClinicComponent>
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    if(this.service.form.valid){
      if(!this.service.form.get('$key').value)
      { this.service.insertClinic(this.service.form.value);
        
      }else
      this.service.updateClinic(this.service.form.value);
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.notificationService.success('Created Successfully');
      //this.onClose();
        
    }

    // onlose(){
    //   this.service.form.reset();
    //   this.service.initializeFormGroup();
    //   this.dialogRef.close();
    // }
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { PatientDetailsService } from 'app/shared/services/patientdetails.service';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
import { NotificationsService } from 'app/shared/services/notifications.service';
import { DialogService } from 'app/shared/services/dialog.service';



@Component({
  selector: 'app-updatepatient',
  templateUrl: './updatepatient.component.html',
  styleUrls: ['./updatepatient.component.scss']
})
export class UpdatepatientComponent implements OnInit {


    searchKey: string;
    array: any;
  dialogRef: any;
  
    constructor(private service: PatientDetailsService,
      private dialog: MatDialog,
      private notificationService: NotificationsService,
      private dialogService: DialogService
      ) { }

  
    ngOnInit() {
      this.service.getPatientdetails();
      
    }

    onSubmit(){
      if(this.service.form.valid){
        if(!this.service.form.get('$key').value)
        this.service.updatePatientdetails(this.service.form.value);
        this.service.form.reset();
        this.service.initializeFormGroup();
        this.notificationService.success('Updated Successfully');
        this.onClose();
        
        
      }
    }

    onClose(){
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.dialogRef.close();
    }


    }




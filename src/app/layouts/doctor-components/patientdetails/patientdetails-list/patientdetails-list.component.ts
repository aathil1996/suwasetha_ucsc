import { Component, OnInit } from '@angular/core';
import { PatientDetailsService } from 'app/shared/services/patientdetails.service';
import { NotificationsService } from 'app/shared/services/notifications.service'
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-patientdetails-list',
  templateUrl: './patientdetails-list.component.html',
  styleUrls: ['./patientdetails-list.component.scss']
})
export class PatientdetailsListComponent implements OnInit {

  constructor(private service : PatientDetailsService,
    public notificationService: NotificationsService,
    public dialogRef: MatDialogRef<PatientDetailsService>
    ) { }

 

  ngOnInit() {
      this.service.getPatientdetails();
    }

    onClear(){
      this.service.form.reset();
      this.service.initializeFormGroup();
      
      
    }

    onEdit(){
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




 
  


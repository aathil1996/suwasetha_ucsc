import { Component, OnInit, ViewChild } from '@angular/core';
import { DoctorsService } from 'app/shared/services/doctors.service';
import { NotificationsService } from 'app/shared/services/notifications.service'
import { MatDialogRef } from '@angular/material';



@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.html',
  styleUrls: ['./doctors.scss']
})
export class DoctorsComponent implements OnInit {
  


 
  constructor(private service : DoctorsService,
    public notificationService: NotificationsService,
    public dialogRef: MatDialogRef<DoctorsComponent>
    ) { }

 

  ngOnInit() {
      this.service.getDoctors();
    }

    onClear(){
      this.service.form.reset();
      this.service.initializeFormGroup();
      
      
    }

    onSubmit(){
      if(this.service.form.valid){
        if(!this.service.form.get('$key').value)
          this.service.insertDoctors(this.service.form.value);
        else
        this.service.updateDoctors(this.service.form.value);
        this.service.form.reset();
        this.service.initializeFormGroup();
        this.notificationService.success('Submitted Successfully');
        this.onClose();
        
        
      }
    }

    onClose(){
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.dialogRef.close();
    }



}


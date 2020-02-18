import { Component, OnInit } from '@angular/core';
import { HospitalService } from 'app/shared/services/hospital.service';
import { NotificationsService } from 'app/shared/services/notifications.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.scss']
})
export class HospitalComponent implements OnInit {

  constructor(
    private service : HospitalService,
    public notificationService: NotificationsService,
    public dialogRef: MatDialogRef<HospitalComponent>
  ) { }

  ngOnInit() {
    //this.service.getHospitals();
  }

  onSubmit(){
    if(this.service.form.valid){
      if(!this.service.form.get('$key').value)
      { this.service.insertHospital(this.service.form.value);
        
      }else
      this.service.updateHospital(this.service.form.value);
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

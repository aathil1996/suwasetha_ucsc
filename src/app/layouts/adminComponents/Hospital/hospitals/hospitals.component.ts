import { Component, OnInit } from '@angular/core';
import { HospitalService } from 'app/shared/services/hospital.service';
import { NotificationsService } from 'app/shared/services/notifications.service';
import { MatDialogRef } from '@angular/material';

interface Province{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.scss']
})



export class HospitalsComponent implements OnInit {

  provinces: Province[] = [
    {value:'colombo', viewValue:'Colombo'},
    {value:'batticalo', viewValue:'Batticalo'},
  ];

  constructor(private service : HospitalService,
    public notificationService: NotificationsService,
    public dialogRef: MatDialogRef<HospitalsComponent>
    ) { }

  ngOnInit() {
    this.service.getHospitals();
    
  }

  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  onSubmit(){
    if(this.service.form.valid){
      if(!this.service.form.get('$key').value){
        this.service.insertHospital(this.service.form.value);
      }
      else{
      this.service.updateHospital(this.service.form.value);
      

      }

      this.service.form.reset();
      this.service.initializeFormGroup();
      this.onClose();
      
    
    }
  }
  onClose(){
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

}

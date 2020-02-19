import { Component, OnInit } from '@angular/core';
import { HospitalService } from 'app/shared/services/hospital.service';
import { NotificationsService } from 'app/shared/services/notifications.service';
import { MatDialogRef } from '@angular/material';

<<<<<<< HEAD
=======
interface Province{
  value: string;
  viewValue: string;
}

>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
@Component({
  selector: 'app-hospitals',
  templateUrl: './hospitals.component.html',
  styleUrls: ['./hospitals.component.scss']
})
<<<<<<< HEAD
export class HospitalsComponent implements OnInit {

=======



export class HospitalsComponent implements OnInit {

  provinces: Province[] = [
    {value:'colombo', viewValue:'Colombo'},
    {value:'batticalo', viewValue:'Batticalo'},
  ];

>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
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
<<<<<<< HEAD
      if(!this.service.form.get('$key').value)
        this.service.insertHospital(this.service.form.value);
      else
      this.service.updateHospital(this.service.form.value);
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.notificationService.success('Submitted Successfully');
      this.onClose();
=======
      if(!this.service.form.get('$key').value){
        this.service.insertHospital(this.service.form.value);
      }
      else{
      this.service.updateHospital(this.service.form.value);
      

      }

      this.service.form.reset();
      this.service.initializeFormGroup();
      this.onClose();
      
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
    
    }
  }
  onClose(){
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

}

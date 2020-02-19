import { Component, OnInit } from '@angular/core';
import { HospitalService } from 'app/shared/services/hospital.service';
import { NotificationsService } from 'app/shared/services/notifications.service';
import { HospitalsComponent } from 'app/layouts/adminComponents/Hospital/hospitals/hospitals.component';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  constructor(private service : HospitalService,
    public notificationService: NotificationsService,
    public dialogRef: MatDialogRef<BookingComponent>) { }

  ngOnInit() {
    this.service.getHospitals();
  }

  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  onSubmit(){
    if(this.service.form.valid){
      if(!this.service.form.get('$key').value)
        this.service.insertHospital(this.service.form.value);
      else
      this.service.updateHospital(this.service.form.value);
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

  bookingOpd(){
    var total = 50;
    while(total<=1){
      
      total--;

    }
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { ClinicsService } from 'app/shared/services/clinics.service';
import { NotificationsService } from 'app/shared/services/notifications.service'
import { MatDialogRef } from '@angular/material';

interface Type{
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-add-clinics',
  templateUrl: './add-clinics.component.html',
  styleUrls: ['./add-clinics.component.scss']
})
export class ClinicsComponent implements OnInit {
  
  types:Type[]=[
    {value:'opd', viewValue:'OPD'},
    {value:'eye', viewValue:'Eye'},
    {value:'dental', viewValue:'Dental'},
    {value:'ent', viewValue:'ENT'},
  ];

 
  constructor(private service : ClinicsService,
    public notificationService: NotificationsService,
    public dialogRef: MatDialogRef<ClinicsComponent>
    ) { }

 

  ngOnInit() {
      this.service.getClinics();
    }

    onClear(){
      this.service.form.reset();
      this.service.initializeFormGroup();
      
      
    }

    onSubmit(){
      if(this.service.form.valid){
        if(!this.service.form.get('$key').value)
          this.service.insertClinics(this.service.form.value);
        else
        this.service.updateClinics(this.service.form.value);
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


import { Component, OnInit } from '@angular/core';
import { DoctorsService } from 'app/shared/services/doctors.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {

  constructor(
    private service : DoctorsService,
    public dialogRef: MatDialogRef<DoctorsComponent>,
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
      if(!this.service.form.get('$key').value){  
        this.service.insertDoctors(this.service.form.value);
        // this.service.addCredential(this.service.form.value);
      }
      else{ 
      this.service.updateDoctors(this.service.form.value);
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

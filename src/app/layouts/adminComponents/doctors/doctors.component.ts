import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { DoctorsService } from 'app/shared/services/doctors.service';
import { MatDialogRef } from '@angular/material';
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit() {
=======
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
        this.service.insertDoctor(this.service.form.value);
        this.service.addCredential(this.service.form.value);}
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
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
  }

}

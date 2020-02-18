import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { HospitalAdminService } from 'app/shared/services/hospital-admin.service';
import { MatDialogRef } from '@angular/material';



@Component({
  selector: 'app-hospital-admin',
  templateUrl: './hospital-admin.component.html',
  styleUrls: ['./hospital-admin.component.scss']
})


export class HospitalAdminComponent implements OnInit {

  constructor(private service : HospitalAdminService,
    public dialogRef: MatDialogRef<HospitalAdminComponent>,) { }

  ngOnInit() {
    this.service.getHospitalAdmin();
  }

  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  onSubmit(){
    if(this.service.form.valid){
      if(!this.service.form.get('$key').value){  
        this.service.insertHospitalAdmin(this.service.form.value);
        this.service.addCredential(this.service.form.value);}
      else{ 
      this.service.updateHospitalAdmin(this.service.form.value);
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

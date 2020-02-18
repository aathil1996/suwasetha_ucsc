import { Component, OnInit } from '@angular/core';
import { PatientService } from 'app/shared/services/patient.service';
import { NotificationsService } from 'app/shared/services/notifications.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})

export class PatientsComponent implements OnInit {
  
  
  userName: string
  fullName: string
  nic: string
  email:string
  tellNo:string
  password:string
  role: string
  //profileImage:string = null

  //downloadURL: Observable<string>

 
 
    constructor(private service : PatientService,
      
      public dialogRef: MatDialogRef<PatientsComponent>,
      
      
      ) { 

      
      }
  
     
  
    ngOnInit() {
        this.service.getPatients();
        
      }
  
      onClear(){
        this.service.form.reset();
        this.service.initializeFormGroup();
        
        
      }
      
      onSubmit(){
        if(this.service.form.valid){
          if(!this.service.form.get('$key').value){
            this.service.insertPatient(this.service.form.value);
            this.service.addCredential(this.service.form.value);
            
          }
          else{
            this.service.updatePatient(this.service.form.value);
            
            
            
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
  
  
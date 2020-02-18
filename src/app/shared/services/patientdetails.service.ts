import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as _ from 'lodash';

@Injectable({
    providedIn: 'root'
  })
  export class PatientDetailsService {
   
  
    constructor(private firebase: AngularFireDatabase) {
      
     }
  
     patientDetailsList: AngularFireList<any>;
  
     form: FormGroup = new FormGroup({
       $key: new FormControl(null),
       fullName:new FormControl('', Validators.required),
       nic: new FormControl('',Validators.required),
       tellNo:new FormControl('', Validators.required),
       
      
     });
  
     initializeFormGroup(){
        this.form.setValue({
          $key: null,
          fullName: '',
          nic:'',
          tellNo:'',
         
        });
     }
     
    
     getPatientdetails(){
       this.patientDetailsList = this.firebase.list('patients');
       return this.patientDetailsList.snapshotChanges();
     }
  
       
  
       updatePatientdetails(patients){
        this.patientDetailsList.update(patients.$key,
        {
          fullName: patients.fullName,
          nic:patients.nic,
          tellNo: patients.tellNo,
          disease: patients.disease,
        });
  
      }
  

  
      populateForm(patients){
        this.form.setValue(patients);
      }
    
  }
  
  
  
  
  
import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as _ from 'lodash';

@Injectable({
    providedIn: 'root'
  })
  export class PrescriptionsService {
   
  
    constructor(private firebase: AngularFireDatabase) {
      
     }
  
     prescriptionsList: AngularFireList<any>;
  
     form: FormGroup = new FormGroup({
       $key: new FormControl(null),
       nic:new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(12)]),
       disease: new FormControl('',Validators.required),
       medicine:new FormControl('', Validators.required),
       dose: new FormControl('', Validators.required),
      
     });
  
     initializeFormGroup(){
        this.form.setValue({
          $key: null,
          nic: '',
          disease:'',
          medicine:'',
          dose:'',
        });
     }
     
    
     getPrescriptions(){
       this.prescriptionsList = this.firebase.list('prescriptions');
       return this.prescriptionsList.snapshotChanges();
     }
  
     insertPrescriptions(prescriptions){
       this.prescriptionsList.push({
        
        nic: prescriptions.nic,
        disease: prescriptions.disease,
        medicine: prescriptions.medicine,
        dose: prescriptions.dose,
  
       });
  
       
  
       }
  
       updatePrescriptions(prescriptions){
        this.prescriptionsList.update(prescriptions.$key,
        {
          nic: prescriptions.nic,
          disease:prescriptions.disease,
          medicine: prescriptions.medicine,
          dose: prescriptions.dose,
        });
  
      }
  
      deletePrescriptions($key: string){
        this.prescriptionsList.remove($key);
      }
  
      populateForm(prescriptions){
        this.form.setValue(prescriptions);
      }
    
  }
  
  
  
  
  
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
       patientId:new FormControl('', Validators.required),
       patientName:new FormControl('', Validators.required),
       description: new FormControl('', Validators.required),
       medicine:new FormControl('', Validators.required),
       dose: new FormControl('', [Validators.required,Validators.email]),
       status: new FormControl(0, Validators.required)
     });
  
     initializeFormGroup(){
        this.form.setValue({
          $key: null,
          patientId: '',
          patientName: '',
          description: '',
          medicine:'',
          dose:'',
          status:0
        });
     }
     
    
     getPrescriptions(){
       this.prescriptionsList = this.firebase.list('prescriptions');
       return this.prescriptionsList.snapshotChanges();
     }
  
     insertPrescriptions(prescriptions){
       this.prescriptionsList.push({
        
        patientId: prescriptions.patientId,
        patientName: prescriptions.patientName,
        description: prescriptions.description,
        medicine: prescriptions.medicine,
        dose: prescriptions.dose,
        status: prescriptions.status
  
       });
  
       
  
       }
  
       updatePrescriptions(prescriptions){
        this.prescriptionsList.update(prescriptions.$key,
        {
          patientId: prescriptions.patientId,
          patientName: prescriptions.patientName,
          description: prescriptions.description,
          medicine: prescriptions.medicine,
          dose: prescriptions.dose,
          status: prescriptions.status,
        });
  
      }
  
      deletePrescriptions($key: string){
        this.prescriptionsList.remove($key);
      }
  
      populateForm(prescriptions){
        this.form.setValue(prescriptions);
      }
    
  }
  
  
  
  
  
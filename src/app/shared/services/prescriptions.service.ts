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
<<<<<<< HEAD
       nic:new FormControl('', Validators.required),
=======
       nic:new FormControl('', [Validators.required, Validators.minLength(10),Validators.maxLength(12)]),
       disease: new FormControl('',Validators.required),
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
       medicine:new FormControl('', Validators.required),
       dose: new FormControl('', Validators.required),
      
     });
  
     initializeFormGroup(){
        this.form.setValue({
          $key: null,
          nic: '',
<<<<<<< HEAD
=======
          disease:'',
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
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
<<<<<<< HEAD
=======
        disease: prescriptions.disease,
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
        medicine: prescriptions.medicine,
        dose: prescriptions.dose,
  
       });
  
       
  
       }
  
       updatePrescriptions(prescriptions){
        this.prescriptionsList.update(prescriptions.$key,
        {
          nic: prescriptions.nic,
<<<<<<< HEAD
=======
          disease:prescriptions.disease,
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
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
  
  
  
  
  
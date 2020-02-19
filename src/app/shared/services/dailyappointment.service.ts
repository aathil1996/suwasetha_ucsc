import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as _ from 'lodash';

@Injectable({
    providedIn: 'root'
  })
  export class DailyAppointmentsService {
   
  
    constructor(private firebase: AngularFireDatabase) {
      
     }
  
     appointmentsList: AngularFireList<any>;
     prescriptionsList: AngularFireList<any>;
  
     form: FormGroup = new FormGroup({
       $key: new FormControl(null),
       firstName: new FormControl('', Validators.required),
       secondName : new FormControl('',Validators.required),
       clinic:new FormControl('', Validators.required),
       hospital: new FormControl('',Validators.required),
       nic: new FormControl('', Validators.required),
       disease: new FormControl('',Validators.required),
       

      
     });
  
     initializeFormGroup(){
        this.form.setValue({
          $key: null,
          firstName:'',
          secondName:'',
          hospital:'',
          clinic:'',
          nic:'',
          disease:''
          

        });
     }
     
    
     getAppointments(){
       this.appointmentsList = this.firebase.list('appointments');
       return this.appointmentsList.snapshotChanges();
     }
  
     getPrescriptions(){
        this.prescriptionsList = this.firebase.list('prescriptions');
        return this.prescriptionsList.snapshotChanges();
      }
   
     
    
  
      populateForm(appointments,prescriptions){
        this.form.setValue(appointments,prescriptions);
      }
    
  }
  
  
  
  
  
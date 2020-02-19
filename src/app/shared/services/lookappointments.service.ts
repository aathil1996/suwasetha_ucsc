import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as _ from 'lodash';

@Injectable({
    providedIn: 'root'
  })
  export class LookAppointmentsService {
   
  
    constructor(private firebase: AngularFireDatabase) {
      
     }
  
     lookAppointmentsList: AngularFireList<any>;
  
     form: FormGroup = new FormGroup({
       $key: new FormControl(null),
       nic:new FormControl('', Validators.required),
       medicine:new FormControl('', Validators.required),
       dose: new FormControl('', Validators.required),
      
     });
  
     initializeFormGroup(){
        this.form.setValue({
          $key: null,
          nic: '',
          medicine:'',
          dose:'',
        });
     }
     
    
     getLookappointments(){
       this.lookAppointmentsList = this.firebase.list('appointments');
       return this.lookAppointmentsList.snapshotChanges();
     }
  
    
       
  
       }
  
    
  

  
  
  
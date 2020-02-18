import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as _ from 'lodash';

@Injectable({
    providedIn: 'root'
  })
  export class AppointmentsService {
   
  
    constructor(private firebase: AngularFireDatabase) {
      
     }
  
     appointmentsList: AngularFireList<any>;
  
     form: FormGroup = new FormGroup({
       $key: new FormControl(null),
       age:new FormControl('', Validators.required),
       clinic:new FormControl('', Validators.required),
       date: new FormControl('', Validators.required),
       firstName: new FormControl('', Validators.required),
       hospital: new FormControl('',Validators.required),
       nic: new FormControl('', Validators.required),
       secondName : new FormControl('',Validators.required)

      
     });
  
     initializeFormGroup(){
        this.form.setValue({
          $key: null,
          age: '',
          clinic:'',
          date:'',
          firstName:'',
          hospital:'',
          nic:'',
          secondName:''

        });
     }
     
    
     getAppointments(){
       this.appointmentsList = this.firebase.list('appointments');
       return this.appointmentsList.snapshotChanges();
     }
  
     
    
  
      populateForm(appointments){
        this.form.setValue(appointments);
      }
    
  }
  
  
  
  
  
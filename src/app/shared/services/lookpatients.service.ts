import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as _ from 'lodash';

@Injectable({
    providedIn: 'root'
  })
  export class LookPatientsService {
   
  
    constructor(private firebase: AngularFireDatabase) {
      
     }
  
     lookPatientsList: AngularFireList<any>;
  
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
     
    
     getLookpatients(){
       this.lookPatientsList = this.firebase.list('patients');
       return this.lookPatientsList.snapshotChanges();
     }
  
    
       
  
       }
  
    

  
  
  
  
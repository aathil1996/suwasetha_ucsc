import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as _ from 'lodash';
import { app } from 'firebase';

@Injectable({
    providedIn: 'root'
  })
  export class ClinicService {
   
  
    constructor(private firebase: AngularFireDatabase) {
      
     }
  
     clinicList: AngularFireList<any>;
  
     form: FormGroup = new FormGroup({
       $key: new FormControl(null),
       clinicName:new FormControl('', Validators.required),
       date:new FormControl('', Validators.required),
       hospital: new FormControl('', Validators.required),
       
      
     });
  
     initializeFormGroup(){
        this.form.setValue({
          $key: null,
          clinicName:'',
          date:'',
          hospital:'',
          
        });
     }
     
    
    getClinic(){
        this.clinicList = this.firebase.list('clinics');
        return this.clinicList.snapshotChanges();
      }
  
     insertClinic(clinics){
       this.clinicList.push({
        
        clinicName:clinics.clinic,
        date:clinics.date,
        hospital:clinics.hospital,
        
  
       });
  
       
  
       }
  
        updateClinic(clinics){
       this.clinicList.update(clinics.$key,
        {
            
            clinicName:clinics.clinic,
        date:clinics.date,
        hospital:clinics.hospital,
         });
  
       }
  
       delete($key: string){
         this.clinicList.remove($key);
       }
  
       populateForm(clinics){
         this.form.setValue(clinics);
       }
    
  }
  
  
  
  
  
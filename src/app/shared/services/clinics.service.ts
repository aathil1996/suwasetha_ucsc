import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as _ from 'lodash';

@Injectable({
    providedIn: 'root'
  })
  export class ClinicsService {
   
  
    constructor(private firebase: AngularFireDatabase) {
      
     }
  
     clinicsList: AngularFireList<any>;
  
     form: FormGroup = new FormGroup({
       $key: new FormControl(null),
       
       date:new FormControl('', Validators.required),
       stime: new FormControl('', Validators.required),
       etime: new FormControl('', Validators.required),
       nod: new FormControl('', Validators.required),
       type: new FormControl('', Validators.required),
       nos: new FormControl('', Validators.required),
      
     });
  
     initializeFormGroup(){
        this.form.setValue({
          $key: null,
         
          date: '',
          stime:'',
          etime:'',
          nod:'',
          type:'',
          nos:'',
        });
     }
     
    
     getClinics(){
       this.clinicsList = this.firebase.list('clinics');
       return this.clinicsList.snapshotChanges();
     }
  
     insertClinics(clinics){
       this.clinicsList.push({
       
        date:clinics.date,
        stime: clinics.stime,
        etime: clinics.etime,
        nod: clinics.nod,
        type: clinics.type,
        nos: clinics.nos,

  
       });
  
       
  
       }
  
       updateClinics(clinics){
        this.clinicsList.update(clinics.$key,
        {
          date:clinics.date,
        stime: clinics.stime,
        etime: clinics.etime,
        nod: clinics.nod,
        type: clinics.type,
        nos: clinics.nos,
        });
  
      }
  
      deleteClinics($key: string){
        this.clinicsList.remove($key);
      }
  
      populateForm(clinics){
        this.form.setValue(clinics);
      }
    
  }
  
  
  
  
  
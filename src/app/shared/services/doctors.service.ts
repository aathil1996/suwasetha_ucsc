import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as _ from 'lodash';

@Injectable({
    providedIn: 'root'
  })
  export class DoctorsService {
   
  
    constructor(private firebase: AngularFireDatabase) {
      
     }
  
     doctorsList: AngularFireList<any>;
  
     form: FormGroup = new FormGroup({
       $key: new FormControl(null),
       nic:new FormControl('', Validators.required),
       name:new FormControl('', Validators.required),
       telno: new FormControl('', Validators.required),
       time: new FormControl('', Validators.required),
      
     });
  
     initializeFormGroup(){
        this.form.setValue({
          $key: null,
          nic: '',
          name:'',
          telno:'',
          time:'',
        });
     }
     
    
     getDoctors(){
       this.doctorsList = this.firebase.list('doctors');
       return this.doctorsList.snapshotChanges();
     }
  
     insertDoctors(doctors){
       this.doctorsList.push({
        
        nic: doctors.nic,
        name: doctors.name,
        telno: doctors.telno,
        time: doctors.time,
  
       });
  
       
  
       }
  
       updateDoctors(doctors){
        this.doctorsList.update(doctors.$key,
        {
          nic: doctors.nic,
          name: doctors.name,
          telno: doctors.telno,
        time: doctors.time,
        });
  
      }
  
      deleteDoctors($key: string){
        this.doctorsList.remove($key);
      }
  
      populateForm(doctors){
        this.form.setValue(doctors);
      }
    
  }
  
  
  
  
  

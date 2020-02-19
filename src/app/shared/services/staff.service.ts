import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as _ from 'lodash';

@Injectable({
    providedIn: 'root'
  })
  export class StaffService {
   
  
    constructor(private firebase: AngularFireDatabase) {
      
     }
  
     staffList: AngularFireList<any>;
  
     form: FormGroup = new FormGroup({
       $key: new FormControl(null),
       nic:new FormControl('', Validators.required),
       name:new FormControl('', Validators.required),
       telno: new FormControl('', Validators.required),
       designation: new FormControl('', Validators.required),
      
     });
  
     initializeFormGroup(){
        this.form.setValue({
          $key: null,
          nic: '',
          name:'',
          telno:'',
          designation:'',
        });
     }
     
    
     getStaff(){
       this.staffList = this.firebase.list('staff');
       return this.staffList.snapshotChanges();
     }
  
     insertStaff(staff){
       this.staffList.push({
        
        nic: staff.nic,
        name: staff.name,
        telno: staff.telno,
        designation: staff.designation,
  
       });
  
       
  
       }
  
       updateStaff(staff){
        this.staffList.update(staff.$key,
        {
          nic: staff.nic,
          name: staff.name,
          telno: staff.telno,
          designation: staff.designation,
        });
  
      }
  
      deleteStaff($key: string){
        this.staffList.remove($key);
      }
  
      populateForm(staff){
        this.form.setValue(staff);
      }
    
  }
  
  
  
  
  
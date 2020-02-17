import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as _ from 'lodash';
import { app } from 'firebase';

@Injectable({
    providedIn: 'root'
  })
  export class BookappointmentService {
   
  
    constructor(private firebase: AngularFireDatabase) {
      
     }
  
     bookAppointmentList: AngularFireList<any>;
  
     form: FormGroup = new FormGroup({
       $key: new FormControl(null),
       firstName:new FormControl('', Validators.required),
       secondName:new FormControl('', Validators.required),
       age: new FormControl('', Validators.required),
       nic: new FormControl('', Validators.required),
       date: new FormControl('', Validators.required),
       hospital: new FormControl('', Validators.required),
       clinic: new FormControl('', Validators.required),
      
     });
  
     initializeFormGroup(){
        this.form.setValue({
          $key: null,
          firstName: '',
          secondName:'',
          age:'',
          nic:'',
          date:'',
          hospital:'',
          clinic:'',
        });
     }
     
    
    getBookAppointment(){
        this.bookAppointmentList = this.firebase.list('appointments');
        return this.bookAppointmentList.snapshotChanges();
      }
  
     insertBookAppointment(appointments){
       this.bookAppointmentList.push({
        
        firstName: appointments.firstName,
        secondName: appointments.secondName,
        age: appointments.age,
        nic: appointments.nic,
        date:appointments.date,
        hospital:appointments.hospital,
        clinic:appointments.clinic,
  
       });
  
       
  
       }
  
        updateBookAppointment(appointments){
       this.bookAppointmentList.update(appointments.$key,
        {
            firstName: appointments.firstName,
            secondName: appointments.secondName,
            age: appointments.age,
            nic: appointments.nic,
            date:appointments.date,
            hospital:appointments.hospital,
            clinic:appointments.clinic,
         });
  
       }
  
       deleteBookAppointment($key: string){
         this.bookAppointmentList.remove($key);
       }
  
       populateForm(appointments){
         this.form.setValue(appointments);
       }
    
  }
  
  
  
  
  
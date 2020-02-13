import { Injectable } from '@angular/core';
import {  AngularFirestore} from '@angular/fire/firestore';
import {AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as _ from 'lodash';
import { HomeComponent } from '../../home/home.component';
import { Scheduler, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionsService {
 

  constructor(private firebase: AngularFireDatabase) {
    
   }

   prescriptionsList: AngularFireList<any>;

   form: FormGroup = new FormGroup({
     $key: new FormControl(null),
     nic:new FormControl('', Validators.required),
     medicine: new FormControl('', Validators.required),
     dose:new FormControl('', [Validators.required, Validators.minLength(10)]),
    
   });

   initializeFormGroup(){
      this.form.setValue({
        $key: null,
        nic: '',
        medicine: '',
        dose: ''
      });
   }
   
  //retrieving data
   getPrescription(){
     this.prescriptionsList = this.firebase.list('prescriptions');
     return this.prescriptionsList.snapshotChanges();
   }

//    insertSystemUser(systemUser){
//      this.prescriptionsList.push({
      
//       userName: systemUser.userName,
//       fullName: systemUser.fullName,
//       nic: systemUser.nic,
//       email: systemUser.email,
//       tellNo: systemUser.tellNo,
//       password: systemUser.password,
//       role: systemUser.role

//      });

     

    //  }

    //  updateSystemUsers(systemUser){
    //   this.prescriptionsList.update(systemUser.$key,
    //   {
    //     userName: systemUser.userName,
    //     fullName: systemUser.fullName,
    //     nic: systemUser.nic,
    //     email: systemUser.email,
    //     tellNo: systemUser.tellNo,
    //     password: systemUser.password,
    //     role: systemUser.role,
    //   });

    // }

    // deleteSystemUsers($key: string){
    //   this.prescriptionsList.remove($key);
    // }

    // populateForm(systemUser){
    //   this.form.setValue(systemUser);
    // }
  
}





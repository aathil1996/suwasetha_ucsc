import { Injectable } from '@angular/core';
import {  AngularFirestore} from '@angular/fire/firestore';
import {AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as _ from 'lodash';
import { SystemUsers } from '../system-users.model';
import { Scheduler, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SystemUsersService {
 

  constructor(private firebase: AngularFireDatabase) {
    
   }

   systemUsersList: AngularFireList<any>;

   form: FormGroup = new FormGroup({
     $key: new FormControl(null),
     userName:new FormControl('', Validators.required),
     fullName: new FormControl('', Validators.required),
     nic:new FormControl('', [Validators.required, Validators.minLength(10)]),
     email: new FormControl('', [Validators.required,Validators.email]),
     tellNo: new FormControl('', [Validators.required, Validators.minLength(10)]),
     password: new FormControl('', [Validators.required, Validators.minLength(8)]),
     role: new FormControl(0, Validators.required)
   });

   initializeFormGroup(){
      this.form.setValue({
        $key: null,
        userName: '',
        fullName: '',
        nic: '',
        email:'',
        tellNo:'',
        password:'',
        role:0
      });
   }
   
  //retrieving data
   getSystemUsers(){
     this.systemUsersList = this.firebase.list('systemUsers');
     return this.systemUsersList.snapshotChanges();
   }

   insertSystemUser(systemUser){
     this.systemUsersList.push({
      
      userName: systemUser.userName,
      fullName: systemUser.fullName,
      nic: systemUser.nic,
      email: systemUser.email,
      tellNo: systemUser.tellNo,
      password: systemUser.password,
      role: systemUser.role

     });

     

     }

     updateSystemUsers(systemUser){
      this.systemUsersList.update(systemUser.$key,
      {
        userName: systemUser.userName,
        fullName: systemUser.fullName,
        nic: systemUser.nic,
        email: systemUser.email,
        tellNo: systemUser.tellNo,
        password: systemUser.password,
        role: systemUser.role,
      });

    }

    deleteSystemUsers($key: string){
      this.systemUsersList.remove($key);
    }

    populateForm(systemUser){
      this.form.setValue(systemUser);
    }
  
}





import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as _ from 'lodash';
<<<<<<< HEAD
import { SystemUsers } from '../system-users.model';
import { Scheduler, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
=======
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { NotificationsService } from './notifications.service';
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e

@Injectable({
  providedIn: 'root'
})
export class SystemUsersService {
 

  constructor(private firebase: AngularFireDatabase,
<<<<<<< HEAD
    private afAuth: AngularFireAuth) {
    
   }

   systemUsersList: AngularFireList<any>;
=======
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private toastr: ToastrService,
    private notification: NotificationsService) {
    
   }

   systemAdminsList: AngularFireList<any>;
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e

   form: FormGroup = new FormGroup({
     $key: new FormControl(null),
     userName:new FormControl('', Validators.required),
     fullName: new FormControl('', Validators.required),
     nic:new FormControl('', [Validators.required, Validators.minLength(10)]),
     email: new FormControl('', [Validators.required,Validators.email]),
     tellNo: new FormControl('', [Validators.required, Validators.minLength(10)]),
     password: new FormControl('', [Validators.required, Validators.minLength(8)]),
<<<<<<< HEAD
     role: new FormControl(0, Validators.required)
=======
    //  role: new FormControl(0, Validators.required)
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
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
<<<<<<< HEAD
        role:0
=======
       // role:0
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
      });
   }
   
   
   getSystemUsers(){
<<<<<<< HEAD
     this.systemUsersList = this.firebase.list('systemUsers');
     return this.systemUsersList.snapshotChanges();
   }

   insertSystemUser(systemUser){
     this.systemUsersList.push({
=======
     this.systemAdminsList = this.firebase.list('systemAdmins');
     return this.systemAdminsList.snapshotChanges();
   }

   insertSystemUser(systemUser){
     this.systemAdminsList.push({
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
      
      userName: systemUser.userName,
      fullName: systemUser.fullName,
      nic: systemUser.nic,
      email: systemUser.email,
      tellNo: systemUser.tellNo,
      password: systemUser.password,
<<<<<<< HEAD
      role: systemUser.role

     });
=======
     // role: systemUser.role

     });
     this.notification.success("System Admin Added")
    //  this.toastr.success("System Admin Added");

    
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e

     

     }

     async addCredential(systemUser){
       const email  = systemUser.email;
       const password = systemUser.password;

       try{
<<<<<<< HEAD
         const resp = await this.afAuth.auth.createUserWithEmailAndPassword(email,password);
       } catch(error){
         console.log(error.message);
=======

         
       } catch(error){
        this.toastr.error(error.message)
        
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
       }


     }

     updateSystemUsers(systemUser){
<<<<<<< HEAD
      this.systemUsersList.update(systemUser.$key,
=======
      this.systemAdminsList.update(systemUser.$key,
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
      {
        userName: systemUser.userName,
        fullName: systemUser.fullName,
        nic: systemUser.nic,
        email: systemUser.email,
        tellNo: systemUser.tellNo,
        password: systemUser.password,
<<<<<<< HEAD
        role: systemUser.role,
      });
=======
        //role: systemUser.role,
      });
      this.notification.success("Successfully Updated");
      // this.toastr.success("Successfully Updated");
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e

    }

    deleteSystemUsers($key: string){
<<<<<<< HEAD
      this.systemUsersList.remove($key);
=======
      this.systemAdminsList.remove($key);
      this.notification.warn("Details Deleted!");
      // this.toastr.warning("Details Deleted!")
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
    }

    populateForm(systemUser){
      this.form.setValue(systemUser);
    }
  
}





import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import * as _ from 'lodash';
import { SystemUsers } from '../system-users.model';
import { Scheduler, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SystemUsersService {
 

  constructor(private firebase: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private toastr: ToastrService) {
    
   }

   systemAdminsList: AngularFireList<any>;

   form: FormGroup = new FormGroup({
     $key: new FormControl(null),
     userName:new FormControl('', Validators.required),
     fullName: new FormControl('', Validators.required),
     nic:new FormControl('', [Validators.required, Validators.minLength(10)]),
     email: new FormControl('', [Validators.required,Validators.email]),
     tellNo: new FormControl('', [Validators.required, Validators.minLength(10)]),
     password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    //  role: new FormControl(0, Validators.required)
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
       // role:0
      });
   }
   
   
   getSystemUsers(){
     this.systemAdminsList = this.firebase.list('systemAdmins');
     return this.systemAdminsList.snapshotChanges();
   }

   insertSystemUser(systemUser){
     this.systemAdminsList.push({
      
      userName: systemUser.userName,
      fullName: systemUser.fullName,
      nic: systemUser.nic,
      email: systemUser.email,
      tellNo: systemUser.tellNo,
      password: systemUser.password,
     // role: systemUser.role

     });
     this.toastr.success("System Admin Added");

    

     

     }

     async addCredential(systemUser){
       const email  = systemUser.email;
       const password = systemUser.password;

       try{
         const resp = await this.afAuth.auth.createUserWithEmailAndPassword(email,password)
          .then((userResponse)=>{
            let user = {
              id: userResponse.user.uid,
              email: userResponse.user.email,
              role: "systemAdmin"

            }

            this.firestore.collection("users").add(user);
            this.toastr.success("User Account Created")
            
          })

         
       } catch(error){
        this.toastr.error(error.message)
        
       }


     }

     updateSystemUsers(systemUser){
      this.systemAdminsList.update(systemUser.$key,
      {
        userName: systemUser.userName,
        fullName: systemUser.fullName,
        nic: systemUser.nic,
        email: systemUser.email,
        tellNo: systemUser.tellNo,
        password: systemUser.password,
        //role: systemUser.role,
      });
      this.toastr.success("Successfully Updated");

    }

    deleteSystemUsers($key: string){
      this.systemAdminsList.remove($key);
      this.toastr.warning("Details Deleted!")
    }

    populateForm(systemUser){
      this.form.setValue(systemUser);
    }
  
}





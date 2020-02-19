import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotificationsService } from './notifications.service';

@Injectable({
  providedIn: 'root'
})
export class ClinicAdminService {

  constructor(
    private firebase: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private toastr: ToastrService,
    private notification: NotificationsService
  ) { }

  clinicAdminsList: AngularFireList<any>;

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    userName:new FormControl('', Validators.required),
    fullName: new FormControl('', Validators.required),
    hospital: new FormControl('', Validators.required),
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
       hospital:'',
       nic: '',
       email:'',
       tellNo:'',
       password:'',
      // role:0
     });
  }
  
  
  getClinicAdmins(){
    this.clinicAdminsList = this.firebase.list('clinicAdmins');
    return this.clinicAdminsList.snapshotChanges();
  }

  insertClinicAdmins(clinicAdmins){
    this.clinicAdminsList.push({
     
     userName: clinicAdmins.userName,
     fullName: clinicAdmins.fullName,
     hospital: clinicAdmins.hospital,
     nic: clinicAdmins.nic,
     email: clinicAdmins.email,
     tellNo: clinicAdmins.tellNo,
     password: clinicAdmins.password,
    // role: clinicAdmins.role

    });
    this.notification.success("Clinic Admin Added");
    // this.toastr.success("Clinic Admin Added");

   

    

    }

    async addCredential(clinicAdmins){
      const email  = clinicAdmins.email;
      const password = clinicAdmins.password;

      try{
        const resp = await this.afAuth.auth.createUserWithEmailAndPassword(email,password)
         .then((userResponse)=>{
           let user = {
             id: userResponse.user.uid,
             email: userResponse.user.email,
             role: "clinicAdmin"

           }

           this.firestore.collection("users").add(user);
           this.notification.success("User Account Created")
          //  this.toastr.success("User Account Created")
           
         })

        
      } catch(error){
      
       this.toastr.error(error.message)
       
      }


    }

    updateClinicAdmins(clinicAdmins){
     this.clinicAdminsList.update(clinicAdmins.$key,
     {
       userName: clinicAdmins.userName,
       fullName: clinicAdmins.fullName,
       hospital: clinicAdmins.hospital,
       nic: clinicAdmins.nic,
       email: clinicAdmins.email,
       tellNo: clinicAdmins.tellNo,
       password: clinicAdmins.password,
       //role: clinicAdmins.role,
     });
     this.notification.success("Successfully Updated");
    //  this.toastr.success("Successfully Updated");

   }

   deleteClinicAdmins($key: string){
     this.clinicAdminsList.remove($key);
     this.notification.warn("Details Deleted");
    //  this.toastr.warning("Details Deleted!")
   }

   populateForm(clinicAdmins){
     this.form.setValue(clinicAdmins);
   }
}

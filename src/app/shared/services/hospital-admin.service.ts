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
export class HospitalAdminService {

  constructor(
    private firebase: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private toastr: ToastrService,
    private notification: NotificationsService
  ) { }

  hospitalAdminsList: AngularFireList<any>;

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
   
   
   getHospitalAdmin(){
     this.hospitalAdminsList = this.firebase.list('hospitalAdmins');
     return this.hospitalAdminsList.snapshotChanges();
   }

   insertHospitalAdmin(hospitalAdmin){
     this.hospitalAdminsList.push({
      
      userName: hospitalAdmin.userName,
      fullName: hospitalAdmin.fullName,
      hospital: hospitalAdmin.hospital,
      nic: hospitalAdmin.nic,
      email: hospitalAdmin.email,
      tellNo: hospitalAdmin.tellNo,
      password: hospitalAdmin.password,
     // role: hospitalAdmin.role

     });

     this.notification.success("Hospital Admin Added");

    

     

     }

     async addCredential(hospitalAdmin){
       const email  = hospitalAdmin.email;
       const password = hospitalAdmin.password;

       try{
         const resp = await this.afAuth.auth.createUserWithEmailAndPassword(email,password)
          .then((userResponse)=>{
            let user = {
              id: userResponse.user.uid,
              email: userResponse.user.email,
              role: "hospitalAdmin"

            }

            this.firestore.collection("users").add(user);
            this.notification.success("User Account Created")
            
          })

         
       } catch(error){
        this.toastr.error(error.message)
        
       }


     }

     updateHospitalAdmin(hospitalAdmin){
      this.hospitalAdminsList.update(hospitalAdmin.$key,
      {
        userName: hospitalAdmin.userName,
        fullName: hospitalAdmin.fullName,
        hospital: hospitalAdmin.hospital,
        nic: hospitalAdmin.nic,
        email: hospitalAdmin.email,
        tellNo: hospitalAdmin.tellNo,
        password: hospitalAdmin.password,
        //role: hospitalAdmin.role,
      });
      this.notification.success("Successfully Updated");

    }

    deleteHospitalAdmin($key: string){
      this.hospitalAdminsList.remove($key);
      this.notification.warn("Details Deleted!")
    }

    populateForm(hospitalAdmin){
      this.form.setValue(hospitalAdmin);
    }
}

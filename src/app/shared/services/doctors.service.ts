import { Injectable } from '@angular/core';
<<<<<<< HEAD
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
  
  
  
  
  
=======
import { AngularFireDatabase,AngularFireList  } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotificationsService } from './notifications.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  constructor(
    private firebase: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private toastr: ToastrService,
    private notification: NotificationsService) { }

    doctorsList: AngularFireList<any>;

    form: FormGroup = new FormGroup({
     $key: new FormControl(null),
     userName:new FormControl('', Validators.required),
     fullName: new FormControl('', Validators.required),
     position: new FormControl('', Validators.required),
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
      position: '',
      nic: '',
      email:'',
      tellNo:'',
      password:'',
     // role:0
    });
 }

 getDoctors(){
  this.doctorsList = this.firebase.list('doctors');
  return this.doctorsList.snapshotChanges();
}

insertDoctor(doctor){
  this.doctorsList.push({
   
   userName: doctor.userName,
   fullName: doctor.fullName,
   position: doctor.position,
   nic: doctor.nic,
   email: doctor.email,
   tellNo: doctor.tellNo,
   password: doctor.password,
  // role: doctor.role

  });
  this.notification.success("Doctor Added");
  // this.toastr.success("Doctor Added");
}
async addCredential(doctor){
  const email  = doctor.email;
  const password = doctor.password;

  try{
    const resp = await this.afAuth.auth.createUserWithEmailAndPassword(email,password)
     .then((userResponse)=>{
       let user = {
         id: userResponse.user.uid,
         email: userResponse.user.email,
         role: "doctor"

       }

       this.firestore.collection("users").add(user);
       this.notification.success("User Account Created")
      //  this.toastr.success("User Account Created")
       
     })

    
  } catch(error){
   this.toastr.error(error.message)
   
  }


}

updateDoctors(doctor){
 this.doctorsList.update(doctor.$key,
 {
   userName: doctor.userName,
   fullName: doctor.fullName,
   position: doctor.position,
   nic: doctor.nic,
   email: doctor.email,
   tellNo: doctor.tellNo,
   password: doctor.password,
   //role: doctor.role,
 });
 this.notification.success("Successfully Updated")
//  this.toastr.success("Successfully Updated");

}

deleteDoctors($key: string){
 this.doctorsList.remove($key);
 this.notification.warn("Details Deleted!");
//  this.toastr.warning("Details Deleted!")
}

populateForm(doctor){
 this.form.setValue(doctor);
}

}

>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e

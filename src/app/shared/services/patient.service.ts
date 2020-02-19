import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase} from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {map} from 'rxjs/operators/map';
import { NotificationsService } from './notifications.service';
import { PatientsComponent } from 'app/layouts/adminComponents/Patients/patients/patients.component';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Patient } from 'app/layouts/adminComponents/Patients/patients';
<<<<<<< HEAD
=======
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  
<<<<<<< HEAD
  patientsList : AngularFireList<any>;
  patientsCollection : AngularFirestoreCollection<Patient>

  constructor(private firebase: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    public notificationService: NotificationsService,
    private db:AngularFirestore
   ) {
    this.patientsCollection = this.db.collection('posts', ref =>
        ref.orderBy('published','desc')
      )
   }


   form: FormGroup = new FormGroup({
     $key: new FormControl(null),
=======
  
  //patientsCollection : AngularFirestoreCollection<Patient>

  constructor(private firebase: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    public notification: NotificationsService,
    private toastr: ToastrService,
    private firestore: AngularFirestore

    
   ) {
    // this.patientsCollection = this.db.collection('posts', ref =>
    //     ref.orderBy('published','desc')
    //   )
   }

   patientsList : AngularFireList<any>;
  

   form: FormGroup = new FormGroup({
    $key: new FormControl(null),
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
    userName:new FormControl('', Validators.required),
    fullName: new FormControl('', Validators.required),
    nic:new FormControl('', [Validators.required, Validators.minLength(10)]),
    email: new FormControl('', [Validators.required,Validators.email]),
    tellNo: new FormControl('', [Validators.required, Validators.minLength(10)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
<<<<<<< HEAD
    profileImage: new FormControl('', [Validators.required])
=======
  //role: new FormControl('')
    //profileImage: new FormControl('', [Validators.required])
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
      profileImage: ''
=======
     
      //profileImage: ''
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
     
    });
 }
 
 getPatients(){
  this.patientsList = this.firebase.list('patients');
  return this.patientsList.snapshotChanges();

  // return this.patientsCollection.snapshotChanges().pipe(map(actions => {
  //   return actions.map(a => {
  //     const data = a.payload.doc.data() as Patient
  //     const id = a.payload.doc.id
  //     return { id, ...data }
  //   })
  // }))
 
}

insertPatient(patient){
 
    this.patientsList.push({
   
      userName: patient.userName,
      fullName: patient.fullName,
       nic: patient.nic,
       email: patient.email,
       tellNo: patient.tellNo,
       password: patient.password,
<<<<<<< HEAD
     profileImage: patient.profileImage,
      
   
     });
   // this.patientsCollection.add(data)

     this.form.reset();
              this.initializeFormGroup();
              this.notificationService.success('Submitted Successfully');
=======
       //role: 'patient'
     //profileImage: patient.profileImage,
      
   
     })
    
     this.notification.success("Patient Added");
   // this.patientsCollection.add(data)

    // this.form.reset();
    // this.initializeFormGroup();
    // this.notificationService.success('Submitted Successfully');
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
              

  }
  
<<<<<<< HEAD

  

  

=======
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
  async addCredential(patient){
    const email  = patient.email;
    const password = patient.password;

    try{
<<<<<<< HEAD
      const resp = await this.afAuth.auth.createUserWithEmailAndPassword(email,password);
    } catch(error){
      this.notificationService.success(error.message);
=======
      const resp = await this.afAuth.auth.createUserWithEmailAndPassword(email,password)
      .then((userResponse)=>{
        let user = {
          id: userResponse.user.uid,
          email: userResponse.user.email,
          role: "patient"

        }

        this.firestore.collection("users").add(user);
        this.notification.success("User Account Created")
      })
    } catch(error){
      this.toastr.error(error.message);
     
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
    }


  }

  updatePatient(patient){
   this.patientsList.update(patient.$key,
   {
     userName: patient.userName,
     fullName: patient.fullName,
     nic: patient.nic,
     email: patient.email,
     tellNo: patient.tellNo,
     password: patient.password,
<<<<<<< HEAD
     profileImage: patient.profileImage
    
   });
=======
     //role: 'patient'
     //profileImage: patient.profileImage
    
   });
   this.notification.success("Successfully Updated");
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e

 }

 deletePatients($key: string){
   this.patientsList.remove($key);
<<<<<<< HEAD
=======
   this.notification.warn("Details Deleted!")
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
 }

 populateForm(patient){
   this.form.setValue(patient);
 }

 
}

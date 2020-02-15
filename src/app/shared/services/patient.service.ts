import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase} from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {map} from 'rxjs/operators/map';
import { NotificationsService } from './notifications.service';
import { PatientsComponent } from 'app/layouts/adminComponents/Patients/patients/patients.component';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Patient } from 'app/layouts/adminComponents/Patients/patients';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  
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
    userName:new FormControl('', Validators.required),
    fullName: new FormControl('', Validators.required),
    nic:new FormControl('', [Validators.required, Validators.minLength(10)]),
    email: new FormControl('', [Validators.required,Validators.email]),
    tellNo: new FormControl('', [Validators.required, Validators.minLength(10)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    profileImage: new FormControl('', [Validators.required])
   
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
      profileImage: ''
     
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
     profileImage: patient.profileImage,
      
   
     });
   // this.patientsCollection.add(data)

     this.form.reset();
              this.initializeFormGroup();
              this.notificationService.success('Submitted Successfully');
              

  }
  

  

  

  async addCredential(patient){
    const email  = patient.email;
    const password = patient.password;

    try{
      const resp = await this.afAuth.auth.createUserWithEmailAndPassword(email,password);
    } catch(error){
      this.notificationService.success(error.message);
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
     profileImage: patient.profileImage
    
   });

 }

 deletePatients($key: string){
   this.patientsList.remove($key);
 }

 populateForm(patient){
   this.form.setValue(patient);
 }

 
}

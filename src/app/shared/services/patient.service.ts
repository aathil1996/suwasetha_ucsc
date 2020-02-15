import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase} from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {map} from 'rxjs/operators/map';
import { NotificationsService } from './notifications.service';
import { PatientsComponent } from 'app/layouts/adminComponents/Patients/patients/patients.component';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  

  constructor(private firebase: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    public notificationService: NotificationsService,
   ) {
    
   }


   patientsList : AngularFireList<any>;
   
  

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
 
}

// getPatientsNic(nic){
//   this.patientsNic = this.firebase.list('/patients',{
//     query:{
//       equalTo: nic
//     }
//   }).valueChanges();

//   return this.patientsList;
// }



// getPatientsNic(){
//   return this.patientsList.snapshotChanges()
//   .pipe(map(actions => actions.map(this.getNic)));
// }







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

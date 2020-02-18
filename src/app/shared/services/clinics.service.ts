import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase} from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {map} from 'rxjs/operators/map';
import { NotificationsService } from './notifications.service';
 import { AddClinicsComponent } from 'app/layouts/hospitaladmin-components/clinics/add-clinics/add-clinics.component';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
//import { Clinics } from 'app/layouts/hospitaladmin-components/clinics';

@Injectable({
  providedIn: 'root'
})
export class ClinicsService {
  
 clinicsList : AngularFireList<any>;
 clinicsCollection : AngularFirestoreCollection<AddClinicsComponent>

  constructor(private firebase: AngularFireDatabase,
    private afAuth: AngularFireAuth,
    public notificationService: NotificationsService,
    private db:AngularFirestore
   ) {
    this.clinicsCollection = this.db.collection('posts', ref =>
        ref.orderBy('published','desc')
      )
   }


   form: FormGroup = new FormGroup({
     $key: new FormControl(null),
    id:new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    stime:new FormControl('', Validators.required),
    etime: new FormControl('', Validators.required),
    nod: new FormControl('', Validators.required),
    
   
  });

  initializeFormGroup(){
    this.form.setValue({
      $key: null,
      id: '',
      date: '',
      stime: '',
      etime:'',
      nod:'',
      
     
    });
 }
 
 getClinics(){
  this.clinicsList = this.firebase.list('clinics');
  return this.clinicsList.snapshotChanges();

  // return this.patientsCollection.snapshotChanges().pipe(map(actions => {
  //   return actions.map(a => {
  //     const data = a.payload.doc.data() as Patient
  //     const id = a.payload.doc.id
  //     return { id, ...data }
  //   })
  // }))
 
}

insertClinics(clinics){
 
    this.clinicsList.push({
   
      id: clinics.id,
      date: clinics.date,
       stime: clinics.stime,
       etime: clinics.etime,
       nod: clinics.nod
       
   
     });
   // this.patientsCollection.add(data)

     this.form.reset();
              this.initializeFormGroup();
              this.notificationService.success('Submitted Successfully');
              

  }
  

  

  

  //async addCredential(clinics){
    // const email  = patient.email;
    // const password = patient.password;

    // try{
    //   const resp = await this.afAuth.auth.createUserWithEmailAndPassword(email,password);
    // } catch(error){
    //   this.notificationService.success(error.message);
    // }


  //}

  updateClinics(clinics){
   this.clinicsList.update(clinics.$key,
   {
    id: clinics.id,
    date: clinics.date,
     stime: clinics.stime,
     etime: clinics.etime,
     nod: clinics.nod
    
   });

 }

 deleteClinics($key: string){
   this.clinicsList.remove($key);
 }

 populateForm(clinics){
   this.form.setValue(clinics);
 }

 
}

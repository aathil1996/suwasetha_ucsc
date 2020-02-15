import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) { }

  createUser(value){
    return this.db.collection('Admin Profile').add({
      fName: value.fName,
      lName: value.lName,
      mr: value.mr,
      uName: value.username.toLowerCase(),
      email: value.email,
      about: value.about,
      tel: value.telNo,
      userType: 1


    }); 

  
  }

  

  
}

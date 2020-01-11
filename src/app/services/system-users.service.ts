import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { SystemUsers } from '../shared/system-users.model';

@Injectable({
  providedIn: 'root'
})
export class SystemUsersService {
  dataSource: SystemUsers;

  constructor(private firestore: AngularFirestore) { }

  
  createSystemUser(value){
    return this.firestore.collection('System Users').add({
      username: value.username,
      fullName: value.fullName,
      nic: value.nic,
      telNo: value.telNo,
      role: value.role,
      password: value.password
    })
  }
  delete_systemUser(record_id) {
    this.firestore.collection('System Users').doc(record_id).delete();
  }
}



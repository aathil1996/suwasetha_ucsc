import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { SystemUsers } from '../shared/system-users.model';
import { Scheduler, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SystemUsersService {
  dataSource: SystemUsers;
  systemUsers: Observable<SystemUsers[]>;
  systemUsersCollection: AngularFirestoreCollection<SystemUsers>;
  systemUsersList: AngularFirestoreDocument<SystemUsers>;

  constructor(private firestore: AngularFirestore) {
    this.systemUsersCollection = this.firestore.collection('system_users');

    this.systemUsers = this.systemUsersCollection.snapshotChanges().pipe(map(changes=>{
      return changes.map(a=>{
        const data = a.payload.doc.data() as SystemUsers;
        data.id = a.payload.doc.id;
        return data;
      })
    }))
   }

  
  createSystemUser(value){
    return this.firestore.collection('system_users').add({
      username: value.username,
      fullName: value.fullName,
      nic: value.nic,
      telNo: value.telNo,
      role: value.role,
      password: value.password
    });
  }
  // deleteSystemUsers(value){
  //   return
  //     this.firestore
  //     .collection("system_users")
  //     .doc(value.id)
  //     .delete();
  // }
  deleteSystemUsers(systemUser:SystemUsers){
    this.systemUsersList = this.firestore.collection('system_users/').doc('${systemUser.id}');
    this.systemUsersList.delete();

  
  }
  
}





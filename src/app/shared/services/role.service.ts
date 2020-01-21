import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  roleList: AngularFireList<any>;
  array = [];


  constructor(private firebase: AngularFireDatabase) {
    this.roleList = this.firebase.list('roles');
    this.roleList.snapshotChanges().subscribe(
      list=>{
        this.array = list.map(item=>{
          return{
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
   }
   
}

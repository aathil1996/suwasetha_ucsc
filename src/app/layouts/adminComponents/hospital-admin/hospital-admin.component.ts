import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

declare const $: any;
declare interface SelectOption{
    hospital: string;
   
}


@Component({
  selector: 'app-hospital-admin',
  templateUrl: './hospital-admin.component.html',
  styleUrls: ['./hospital-admin.component.scss']
})


export class HospitalAdminComponent implements OnInit {

  constructor(private firebase: AngularFireDatabase) { }

  ngOnInit() {
  }

 

var hospitals =  this.firebase.database().ref("hospitals")
export const HOSPITALS: SelectOption[] = [
  
];

}

import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BookingOpdService {

  constructor(private firebase: AngularFireDatabase) { }

  bookingList: AngularFireList<any>;

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    hospitalName:new FormControl('', Validators.required),
    hosCategory: new FormControl('', Validators.required),
    hospitalAddress:new FormControl('', Validators.required),
    
    
  });

}

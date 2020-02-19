import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotificationsService } from './notifications.service';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private firebase: AngularFireDatabase,
    private notification: NotificationsService) { }

  hospitalsList: AngularFireList<any>;

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    hospitalName:new FormControl('', Validators.required),
    hosCategory: new FormControl('', Validators.required),
    hosTellNo:new FormControl('', [Validators.required, Validators.minLength(10)]),
    hosEmail: new FormControl('', [Validators.required,Validators.email]),
    hospitalAddress:new FormControl('', Validators.required),
    hospitalProvince: new FormControl('', Validators.required),
    hospitalDistrict: new FormControl('', Validators.required)
    
  });

  initializeFormGroup(){
    this.form.setValue({
      $key: null,
      hospitalName: '',
      hosCategory: '',
      hosEmail: '',
      hosTellNo:'',
      hospitalAddress:'',
      hospitalProvince:'',
      hospitalDistrict:''
    });
 }
 getHospitals(){
  this.hospitalsList = this.firebase.list('hospitals');
  return this.hospitalsList.snapshotChanges();
}

insertHospital(hospital){
  this.hospitalsList.push({
   
    hospitalName: hospital.hospitalName,
    hosCategory: hospital.hosCategory,
    hosEmail: hospital.hosEmail,
    hosTellNo: hospital.hosTellNo,
    hospitalAddress: hospital.hospitalAddress,
    hospitalProvince: hospital.hospitalProvince,
    hospitalDistrict: hospital.hospitalDistrict

  });
  this.notification.success("Hospital added successfully");

  }

  updateHospital(hospital){
    this.hospitalsList.update(hospital.$key,
    {
      hospitalName: hospital.hospitalName,
      hosCategory: hospital.hosCategory,
      hosEmail: hospital.hosEmail,
      hosTellNo: hospital.hosTellNo,
      hospitalAddress: hospital.hospitalAddress,
      hospitalProvince: hospital.hospitalProvince,
      hospitalDistrict: hospital.hospitalDistrict
    });

    this.notification.success("Successfully Updated")

  }

  deleteHospital($key: string){
    this.hospitalsList.remove($key);
    this.notification.warn("Hospital Deleted")
  }

  populateForm(hospital){
    this.form.setValue(hospital);
  }
  

}

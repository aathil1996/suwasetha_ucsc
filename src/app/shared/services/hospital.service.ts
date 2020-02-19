import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormGroup, FormControl, Validators } from '@angular/forms';
<<<<<<< HEAD
=======
import { NotificationsService } from './notifications.service';
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

<<<<<<< HEAD
  constructor(private firebase: AngularFireDatabase) { }
=======
  constructor(private firebase: AngularFireDatabase,
    private notification: NotificationsService) { }
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e

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
<<<<<<< HEAD
=======
  this.notification.success("Hospital added successfully");
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e

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

<<<<<<< HEAD
=======
    this.notification.success("Successfully Updated")

>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
  }

  deleteHospital($key: string){
    this.hospitalsList.remove($key);
<<<<<<< HEAD
=======
    this.notification.warn("Hospital Deleted")
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
  }

  populateForm(hospital){
    this.form.setValue(hospital);
  }
  

}

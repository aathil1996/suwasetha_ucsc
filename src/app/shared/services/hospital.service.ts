import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private firebase: AngularFireDatabase) { }

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

  }

  deleteHospital($key: string){
    this.hospitalsList.remove($key);
  }

  populateForm(hospital){
    this.form.setValue(hospital);
  }
  

}

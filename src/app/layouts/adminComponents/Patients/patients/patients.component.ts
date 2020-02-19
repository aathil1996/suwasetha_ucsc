import { Component, OnInit } from '@angular/core';
import { PatientService } from 'app/shared/services/patient.service';
import { NotificationsService } from 'app/shared/services/notifications.service';
import { MatDialogRef } from '@angular/material';
<<<<<<< HEAD
import { AngularFireList } from '@angular/fire/database';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
=======
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})

export class PatientsComponent implements OnInit {
  
  
  userName: string
  fullName: string
  nic: string
  email:string
  tellNo:string
  password:string
<<<<<<< HEAD
  profileImage:string = null

  downloadURL: Observable<string>
=======
  role: string
  //profileImage:string = null

  //downloadURL: Observable<string>
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e

 
 
    constructor(private service : PatientService,
<<<<<<< HEAD
      public notificationService: NotificationsService,
      public dialogRef: MatDialogRef<PatientsComponent>,
      private storage: AngularFireStorage
=======
      
      public dialogRef: MatDialogRef<PatientsComponent>,
      
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
      
      ) { 

      
      }
  
     
  
    ngOnInit() {
        this.service.getPatients();
<<<<<<< HEAD
        // this.service.getPatients().subscribe(
        //   list => {
        //     let array = list.map(item =>{
        //       return {
        //         nic: item.key.nic,
        //         ...item.payload.val()
        //       };
              
        //     });
           
            
            
        //   }
        // );
       
=======
        
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
      }
  
      onClear(){
        this.service.form.reset();
        this.service.initializeFormGroup();
        
        
      }
<<<<<<< HEAD
      // getNic = (_: { payload: { doc: { data: () => any; nic: any; }; }; }) =>{
      //   const record = _.payload.doc.data();
      //   record.nic = _.payload.doc.nic;
       
      //   return record.nic;
        
        
      // }


  
      onSubmit(){
        if(this.service.form.valid){
          const data = {
            userName: this.userName,
            fullName: this.fullName,
            nic: this.nic,
            email:this.email,
            tellNo:this.tellNo,
            password:this.password,
            profileImage:this.profileImage
          };
          this.service.insertPatient(data);
              this.service.addCredential(data);
              this.onClose();
      }
        //   else
        //  { 
        //   const data = {
        //     userName: this.userName,
        //     fullName: this.fullName,
        //     nic: this.nic,
        //     email:this.email,
        //     tellNo:this.tellNo,
        //     password:this.password,
        //     profileImage:this.profileImage
        //   };
        //   this.service.updatePatient(data);
        //   this.service.form.reset();
        //   this.service.initializeFormGroup();
        //   this.notificationService.success('Submitted Successfully');
        //   this.onClose();
        //  }
=======
      
      onSubmit(){
        if(this.service.form.valid){
          if(!this.service.form.get('$key').value){
            this.service.insertPatient(this.service.form.value);
            this.service.addCredential(this.service.form.value);
            
          }
          else{
            this.service.updatePatient(this.service.form.value);
            
            
            
          }
        this.service.form.reset();
        this.service.initializeFormGroup();
        this.onClose();
        }
        
        
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
          
          
          
        }
      
  
      onClose(){
        this.service.form.reset();
        this.service.initializeFormGroup();
        this.dialogRef.close();
      }
  
  
  
  }
  
  
import { Component, OnInit } from '@angular/core';
import { PatientService } from 'app/shared/services/patient.service';
import { NotificationsService } from 'app/shared/services/notifications.service';
import { MatDialogRef } from '@angular/material';
import { AngularFireList } from '@angular/fire/database';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';

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
  profileImage:string = null

  downloadURL: Observable<string>

 
 
    constructor(private service : PatientService,
      public notificationService: NotificationsService,
      public dialogRef: MatDialogRef<PatientsComponent>,
      private storage: AngularFireStorage
      
      ) { 

      
      }
  
     
  
    ngOnInit() {
        this.service.getPatients();
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
       
      }
  
      onClear(){
        this.service.form.reset();
        this.service.initializeFormGroup();
        
        
      }
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
          
          
          
        }
      
  
      onClose(){
        this.service.form.reset();
        this.service.initializeFormGroup();
        this.dialogRef.close();
      }
  
  
  
  }
  
  
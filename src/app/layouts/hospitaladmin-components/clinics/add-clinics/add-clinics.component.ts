import { Component, OnInit } from '@angular/core';
import { ClinicsService } from 'app/shared/services/clinics.service';
import { NotificationsService } from 'app/shared/services/notifications.service';
import { MatDialogRef } from '@angular/material';
import { AngularFireList } from '@angular/fire/database';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { Time } from '@angular/common';

@Component({
  selector: 'app-add-clinics',
  templateUrl: './add-clinics.component.html',
  styleUrls: ['./add-clinics.component.scss']
})

export class AddClinicsComponent implements OnInit {
  
  
  id: number
  date: Date
  stime: Time
  etime:Time
  nod:number
  

  downloadURL: Observable<string>

 
 
    constructor(private service : ClinicsService,
      public notificationService: NotificationsService,
      public dialogRef: MatDialogRef<AddClinicsComponent>,
      private storage: AngularFireStorage
      
      ) { 

      
      }
  
     
  
    ngOnInit() {
        this.service.getClinics();
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
            id: this.id,
            date: this.date,
            stime: this.stime,
            etime:this.etime,
            nod:this.nod,
           
          };
          this.service.insertClinics(data);
              // this.service.addCredential(data);
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
  
  
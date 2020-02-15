import { Component, OnInit } from '@angular/core';
import { PatientService } from 'app/shared/services/patient.service';
import { NotificationsService } from 'app/shared/services/notifications.service';
import { MatDialogRef } from '@angular/material';
import { AngularFireList } from '@angular/fire/database';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})

export class PatientsComponent implements OnInit {
  
  imageSource : string = 'src/assets/img/faces/dummy.jpg';

 
 
    constructor(private service : PatientService,
      public notificationService: NotificationsService,
      public dialogRef: MatDialogRef<PatientsComponent>,
      
      ) { 

      
      }
  
      patientsNic: AngularFireList<any>;
  
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
          this.service.insertPatient(this.service.form.value);
              this.service.addCredential(this.service.form.value);
              this.onClose();
      }
          else
         { this.service.updatePatient(this.service.form.value);
          this.service.form.reset();
          this.service.initializeFormGroup();
          this.notificationService.success('Submitted Successfully');
          this.onClose();
         }
          
          
          
        }
      
  
      onClose(){
        this.service.form.reset();
        this.service.initializeFormGroup();
        this.dialogRef.close();
      }
  
  
  
  }
  
  
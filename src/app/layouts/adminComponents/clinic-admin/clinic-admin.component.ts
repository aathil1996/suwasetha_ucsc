import { Component, OnInit } from '@angular/core';
import { ClinicAdminService } from 'app/shared/services/clinic-admin.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-clinic-admin',
  templateUrl: './clinic-admin.component.html',
  styleUrls: ['./clinic-admin.component.scss']
})
export class ClinicAdminComponent implements OnInit {

  constructor(private service : ClinicAdminService,
    public dialogRef: MatDialogRef<ClinicAdminComponent>) { }

    ngOnInit() {
      this.service.getClinicAdmins();
    }
  
    onClear(){
      this.service.form.reset();
      this.service.initializeFormGroup();
    }
  
    onSubmit(){
      if(this.service.form.valid){
        if(!this.service.form.get('$key').value){  
          this.service.insertClinicAdmins(this.service.form.value);
          this.service.addCredential(this.service.form.value);}
        else{ 
        this.service.updateClinicAdmins(this.service.form.value);
        }
        this.service.form.reset();
        this.service.initializeFormGroup();
        this.onClose();
        
        
      }
    }
  
    onClose(){
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.dialogRef.close();
    }

}

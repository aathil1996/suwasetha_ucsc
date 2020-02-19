<<<<<<< HEAD
import { Component, OnInit, ViewChild } from '@angular/core';
import { SystemUsersService } from 'app/shared/services/system-users.service';
import { RoleService } from 'app/shared/services/role.service';
import { NotificationsService } from 'app/shared/services/notifications.service'
import { MatDialogRef } from '@angular/material';
import { AngularFireAuth } from '@angular/fire/auth';
=======
import { Component, OnInit } from '@angular/core';
import { SystemUsersService } from 'app/shared/services/system-users.service';
import { MatDialogRef } from '@angular/material';
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e



@Component({
  selector: 'app-system-users',
  templateUrl: './system-users.component.html',
  styleUrls: ['./system-users.component.scss']
})
export class SystemUsersComponent implements OnInit {
  


 
  constructor(private service : SystemUsersService,
<<<<<<< HEAD
    private roleService: RoleService,
    public notificationService: NotificationsService,
=======
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
    public dialogRef: MatDialogRef<SystemUsersComponent>,
    
    ) { }

 

  ngOnInit() {
      this.service.getSystemUsers();
    }

    onClear(){
      this.service.form.reset();
      this.service.initializeFormGroup();
      
      
    }


    onSubmit(){
      if(this.service.form.valid){
<<<<<<< HEAD
        if(!this.service.form.get('$key').value)
        {  this.service.insertSystemUser(this.service.form.value);
          this.service.addCredential(this.service.form.value);}
        else
       { this.service.updateSystemUsers(this.service.form.value);
        this.service.form.reset();
        this.service.initializeFormGroup();
        this.notificationService.success('Submitted Successfully');
        this.onClose();}
=======
        if(!this.service.form.get('$key').value){  
          this.service.insertSystemUser(this.service.form.value);
          this.service.addCredential(this.service.form.value);}
        else{ 
        this.service.updateSystemUsers(this.service.form.value);
        }
        this.service.form.reset();
        this.service.initializeFormGroup();
        this.onClose();
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
        
        
      }
    }

    onClose(){
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.dialogRef.close();
    }



}


import { Component, OnInit, ViewChild } from '@angular/core';
import { SystemUsersService } from 'app/shared/services/system-users.service';
import { RoleService } from 'app/shared/services/role.service';
import { NotificationsService } from 'app/shared/services/notifications.service'
import { ɵEmptyOutletComponent } from '@angular/router';
import { MatDialogRef } from '@angular/material';



@Component({
  selector: 'app-system-users',
  templateUrl: './system-users.component.html',
  styleUrls: ['./system-users.component.scss']
})
export class SystemUsersComponent implements OnInit {
  


 
  constructor(private service : SystemUsersService,
    private roleService: RoleService,
    public notificationService: NotificationsService,
    public dialogRef: MatDialogRef<SystemUsersComponent>
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
        if(!this.service.form.get('$key').value)
          this.service.insertSystemUser(this.service.form.value);
        else
        this.service.updateSystemUsers(this.service.form.value);
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


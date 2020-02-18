import { Component, OnInit } from '@angular/core';
import { BookappointmentService } from 'app/shared/services/bookappointment.service'
//import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogConfig } from '@angular/material';
import { NotificationsService } from 'app/shared/services/notifications.service';
//import { DialogService } from 'app/shared/services/dialog.service';
import { MatDialogRef } from '@angular/material';
//import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-bookappointment',
  templateUrl: './bookappointment.component.html',
  styleUrls: ['./bookappointment.component.scss']
})
export class BookappointmentComponent implements OnInit {
  //searchKey: string;
  //array: any;

  constructor(
    private service : BookappointmentService,
    public notificationService: NotificationsService,
    public dialogRef: MatDialogRef<BookappointmentComponent>
  ) { }

  ngOnInit() {
    this.service.getBookAppointment();
  }

  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  onSubmit(){
    if(this.service.form.valid){
      if(!this.service.form.get('$key').value)
      { this.service.insertBookAppointment(this.service.form.value);
        
      }else
      this.service.updateBookAppointment(this.service.form.value);
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.notificationService.success('Created Successfully');
      this.onClose();
        
    }
  }

  onClose(){
    this.service.form.reset();
    this.service.initializeFormGroup();
     this.dialogRef.close();
  }

}

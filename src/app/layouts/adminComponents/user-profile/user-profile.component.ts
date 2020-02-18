import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { FirebaseService } from '../../../shared/services/firebase.service';



//import { AvatarDialogComponent } from 'app/avatar-dialog/avatar-dialog.component';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  adminForm: FormGroup;
  //retirve Admin details from DB
  items: Array<any>;

  validation_messages = {
    'mr':[
      { type:'required', message: "Please fill this"}
    ],
    'username':[
      { type:'required', message: "Please fill this"}
    ],
    'email':[
      { type:'required', message: "Please fill this"}
    ],
    'fName':[
      { type:'required', message: "Please fill this"}
    ],
    'lName':[
      { type:'required', message: "Please fill this"}
    ],
    'telNo':[
      { type:'required', message: "Please fill this"}
    ],
    'about':[
      { type:'required', message: "Please fill this"},
    ]
  };
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
    public firebaseService: FirebaseService
  ) { }

  ngOnInit() {
    this.createForm();
   
  }

  createForm(){
    this.adminForm = this.fb.group({
      mr: ['', Validators.required],
      username: ['',Validators.required],
      email: ['',Validators.required],
      fName: ['',Validators.required],
      lName: ['',Validators.required],
      telNo: ['',Validators.required],
      about: ['',Validators.required]
    });
  }

 

  resetFields(){
    this.adminForm = this.fb.group({
      mr: new FormControl('', Validators.required),
      username:  new FormControl('', Validators.required),
      email:  new FormControl('', Validators.required),
      fName:  new FormControl('', Validators.required),
      lName:  new FormControl('', Validators.required),
      telNo:  new FormControl('', Validators.required),
      about:  new FormControl('', Validators.required)
    });
  }

  onSubmit(value){
    this.firebaseService.createUser(value)
    .then(
      res =>{
        this.resetFields();
        this.router.navigate(['/']);
      }
    )
  }

}

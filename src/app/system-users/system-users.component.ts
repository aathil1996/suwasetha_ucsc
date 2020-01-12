import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { FirebaseService } from 'app/services/firebase.service';
import { SystemUsersService } from 'app/services/system-users.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';




export interface UserData{
  // id: number;
  username: string;
  fullName: string;
  nic: string;
  telNo: string;
  role: string;
  password: string;
 
}

export interface Role{
  value: number;
  viewValue: string;
}


@Component({
  selector: 'app-system-users',
  templateUrl: './system-users.component.html',
  styleUrls: ['./system-users.component.scss']
})
export class SystemUsersComponent implements OnInit {
  //Modal Form to inser user
  sysUsersForm: FormGroup;

  //Validation error messages
  validation_messages = {
    'fullName':[
      { type:'required', message: "Please fill this"}
    ],
    'username':[
      { type:'required', message: "Please fill this"}
    ],
    'nic':[
      { type:'required', message: "Please fill this"}
    ],
    'telNo':[
      { type:'required', message: "Please fill this"}
    ],
    'role':[
      { type:'required', message: "Please fill this"}
    ],
    'password':[
      { type:'required', message: "Please fill this"}
    ]
  };

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  //systemUserList: AngularFirestoreCollection<UserData>;
  dataSource: MatTableDataSource<UserData>;
  displayedColumns: string[] = ['fullName', 'username', 'role','nic', 'telNo','action'];
 
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
    public firebaseService: FirebaseService,
    public systemUsersService: SystemUsersService,
    private firestore: AngularFirestore
  ) { 
   

    
  }

  ngAfterViewInit(){
    this.firestore.collection<UserData>('system_users').valueChanges().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  ngOnInit() {
    // this.resetFields();
    this.addSystemUser();
  }

  addSystemUser(){
    this.sysUsersForm = this.fb.group({
      fullName: ['', Validators.required],
      username: ['',Validators.required],
      nic: ['',Validators.required],
      role: ['',Validators.required],
      telNo: ['',Validators.required],
      password: ['',Validators.required]
    });
   
  }

 

  resetFields(){
    this.sysUsersForm = this.fb.group({
      fullName: new FormControl('', Validators.required),
      username:  new FormControl('', Validators.required),
      nic:  new FormControl('', Validators.required),
      role:  new FormControl('', Validators.required),
      telNo:  new FormControl('', Validators.required),
      password:  new FormControl('', Validators.required),
      
    });
  }


  deleteSystemUsers(value){
    const response = confirm("Are you sure want to delete?");
    if(response){
      this.systemUsersService.deleteSystemUsers(value);
    }
  }
  showMessage : boolean = false;

  onSubmit(value){
    this.systemUsersService.createSystemUser(value)
    .then(
      res =>{
        this.showMessage = true;
        this.resetFields();
        
        this.router.navigate(['system-users']);

      }
    )
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}


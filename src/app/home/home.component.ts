import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AngularFireDatabase } from '@angular/fire/database';


>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
<<<<<<< HEAD
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
=======
  styleUrls: ['./home.component.scss', '../../assets/bootstrap/bootstrap.min.css']
})
export class HomeComponent implements OnInit {

  form: FormGroup
  constructor( private fb: FormBuilder,
    private af: AngularFireDatabase,
    private toastr : ToastrService) { 
      this.createForm();
    }

    createForm(){
      this.form = this.fb.group({
        email: ['', Validators.required],
        
      });
    }
  
    onSubmit(){
      const {name, email, message} = this.form.value;
      
      let formRequest = { email };
      this.af.list('/newLetter').push(formRequest);
      this.toastr.success("Added for News Letter");
      this.form.reset();
    }
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e

  ngOnInit() {
  }

<<<<<<< HEAD
}
=======
}
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e

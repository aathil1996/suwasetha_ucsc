import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AngularFireDatabase } from '@angular/fire/database';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
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

  ngOnInit() {
  }

}

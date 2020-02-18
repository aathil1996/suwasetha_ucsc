import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', 
  '../../../assets/bootstrap/bootstrap.min.css',
  '../../../assets/css/Features-Blue.css',
  '../../../assets/css/Footer-Basic.css',
  '../../../assets/css/Footer-Dark.css',
  '../../../assets/css/Highlight-Blue.css',
  '../../../assets/css/Highlight-Phone.css',
  '../../../assets/css/Map-Clean.css',
  '../../../assets/css/Registration-Form-with-Photo.css',
  '../../../assets/css/Testimonials.css',
]
})
export class ContactComponent implements OnInit {

  form: FormGroup

  constructor(
    private fb: FormBuilder,
    private af: AngularFireDatabase,
    private toastr : ToastrService
  ) { 
    this.createForm();
  }

  createForm(){
    this.form = this.fb.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit(){
    const {name, email, message} = this.form.value;
    const date = Date();
    const html = `
      <div>From: ${name}</div>
      <div>Email: <a href="mailto:${email}">${email}</a></div>
      <div>Date: ${date}</div>
      <div>Message: ${message}</div>
    `;

    let formRequest = { name, email, message, date, html };
    this.af.list('/messages').push(formRequest);
    this.toastr.success("Message sent Successfully");
    this.form.reset();
  }

  ngOnInit() {
  }

}

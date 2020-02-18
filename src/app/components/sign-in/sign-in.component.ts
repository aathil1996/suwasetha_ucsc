import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/shared/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  
  styleUrls: ['./sign-in.component.scss',

  '../../../assets/bootstrap/bootstrap.min.css',
 '../../../assets/css/Features-Blue.css',
  '../../../assets/css/Footer-Basic.css',
  '../../../assets/css/Footer-Dark.css',
  '../../../assets/css/Highlight-Blue.css',
  '../../../assets/css/Highlight-Phone.css',
  '../../../assets/css/Map-Clean.css',
  '../../../assets/css/Registration-Form-with-Photo.css',
  '../../../assets/css/Testimonials.css',]
})
export class SignInComponent implements OnInit {

  constructor(private auth: AuthService) { }

  public loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  login(formData: FormData){
    this.auth.login(formData["email"], formData["password"]);
  }

  ngOnInit() {
  }

}

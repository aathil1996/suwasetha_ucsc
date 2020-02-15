import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DispensaryLayoutComponent } from './layouts/dispensary-layout/dispensary-layout.component';
import { HomeComponent } from './home/home.component';
import { DoctorsLayoutComponent } from './layouts/doctors-layout/doctors-layout.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { DoctorLayoutComponent } from './layouts/doctor-layout/doctor-layout.component';

const routes: Routes =[

// for home page
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: DoctorLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/doctor-layout/doctor-layout.module#DoctorLayoutModule'
    }] 
  },
  {
    path: 'doctors',
  redirectTo: 'doctors/doctors/testing2',
   pathMatch: 'full',
  }, 
  {
    path: 'doctors',
    component: DoctorsLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/doctors-layout/doctors-layout.module#DoctorsLayoutModule'
    }]
  },
  {
    path: 'sign-in',
    component: SignInComponent,
    
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    
  },
  {
    path: 'reset-password',
    component: ForgotPasswordComponent,
    
  },
  {
    path: 'email-verify',
    component: VerifyEmailComponent,
    
  },
  
    }
  
]

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }

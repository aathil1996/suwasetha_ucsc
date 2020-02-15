import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DoctorLayoutComponent } from './layouts/doctor-layout/doctor-layout.component';
import { StaffLayoutComponent } from './layouts/staff-layout/staff-layout.component';
import { HomeComponent } from './home/home.component';

// import { DispensaryLayoutComponent } from './layouts/dispensary-layout/dispensary-layout.component';
// import { DoctorLayoutComponent } from './layouts/doctor-layout/doctor-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DispensaryLayoutComponent } from './layouts/dispensary-layout/dispensary-layout.component';
//import { HomeComponent } from './home/home.component';
//import { DoctorsLayoutComponent } from './layouts/doctors-layout/doctors-layout.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AboutComponent } from './main/about/about.component';
import { ContactComponent } from './main/contact/contact.component';
import { AuthGuardGuard } from './auth/auth-guard.guard';


 const routes: Routes =[

// for home page
{
  path: '',
  component: HomeComponent
},
{
  path: 'about',
  component: AboutComponent
},
{
  path: 'contact',
  component: ContactComponent
},
{
  path: 'login',
  component: SignInComponent
},

  {
    path: 'doctor',
    redirectTo: 'doctor/doctor/dashboard',
    pathMatch: 'full',
    canActivate:[AuthGuardGuard], data:{roles: ["doctor"]}
  }, {
    path: 'doctor',
    component: DoctorLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/doctor-layout/doctor-layout.module#DoctorLayoutModule'
    }] 

  
  }, 

  //for staff
  {
    path: 'staff',
    redirectTo: 'staff/staff/patients',
    pathMatch: 'full',
  }, {
    path: 'staff',
    component: StaffLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/staff-layout/staff-layout.module#StaffLayoutModule'
    }] 

  
  }, 
// system admin dashboard
 {
   path: 'systemAdmin',
 redirectTo: 'systemAdmin/systemAdmin/dashboard',
  pathMatch: 'full',
  canActivate:[AuthGuardGuard], data:{roles: ["systemAdmin"]}
  
 }, 
    
  
  {
    path: 'systemAdmin',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  },
 

  // dispensary dashbaord
  {
    path: 'dispensaryAdmin',
  redirectTo: 'dispensaryAdmin/dispensaryAdmin/testing',
   pathMatch: 'full',
   canActivate:[AuthGuardGuard], data:{roles: ["dispensaryAdmin"]}
  }, 
  {
    path: 'dispensaryAdmin',
    component: DispensaryLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/dispensary-layout/dispensary-layout.module#DispensaryLayoutModule'
    }]
  },

  // doctor dashbaord

  // {
  //   path: 'doctors',
  // redirectTo: 'doctors/doctors/testing2',
  //  pathMatch: 'full',
  // }, 
  // {
  //   path: 'doctors',
  //   component: DoctorsLayoutComponent,
  //   children: [{
  //     path: '',
  //     loadChildren: './layouts/doctors-layout/doctors-layout.module#DoctorsLayoutModule'
  //   }]
  // },
 
  {
    path: 'reset-password',
    component: ForgotPasswordComponent,
    
  },
  {
    path: 'email-verify',
    component: VerifyEmailComponent,
    
  },
  
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true,
       scrollPositionRestoration: "enabled"
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }

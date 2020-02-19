import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { DoctorLayoutComponent } from './layouts/doctor-layout/doctor-layout.component';
import { StaffLayoutComponent } from './layouts/staff-layout/staff-layout.component';
import { HomeComponent } from './home/home.component';

import { PrescriptionComponent } from './prescription/prescription.component';
// import { DispensaryLayoutComponent } from './layouts/dispensary-layout/dispensary-layout.component';
// import { DoctorLayoutComponent } from './layouts/doctor-layout/doctor-layout.component';


import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DispensaryLayoutComponent } from './layouts/dispensary-layout/dispensary-layout.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

//import { BookappointmentComponent } from './bookappointment/bookappointment.component';
//import { BookappointmentListComponent } from 'app/layouts/patient-components/bookappointment/bookappointment-list/bookappointment-list.component'
//import { AuthGuardService as AuthGuard } from 'app/shared/services/auth-guard.service';
//import { RoleGuardService as RoleGuard } from 'app/shared/services/role-guard.service';
//import { ClinicListComponent } from 'app/layouts/patient-components/clinic/clinic-list/clinic-list.component';
//import { HospitalListComponent } from 'app/layouts/patient-components/hospital/hospital-list/hospital-list.component';
import { PatientLayoutComponent } from './layouts/patient-layout/patient-layout.component';

import { AboutComponent } from './main/about/about.component';
import { ContactComponent } from './main/contact/contact.component';
import { AuthGuardGuard } from './auth/auth-guard.guard';
import { BlogComponent } from './main/blog/blog.component';



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
  path: 'blog',
  component: BlogComponent
},

  {
    path: 'doctor',
    redirectTo: 'doctor/doctor/dashboard',
    pathMatch: 'full',
    canActivate:[AuthGuardGuard], data:{roles: ["doctor"]}
  }, {
    path: 'doctor',
    component: DoctorLayoutComponent,
    canActivate:[AuthGuardGuard], data:{roles: ["doctor"]},
    children: [{
      path: '',
      loadChildren: './layouts/doctor-layout/doctor-layout.module#DoctorLayoutModule'
    }] 

  
  }, 


  {
    path: 'patient',
    redirectTo: 'patient/patient/bookappointment',
    pathMatch: 'full',
    canActivate:[AuthGuardGuard], data:{roles: ["patient"]}
  }, {
    path: 'patient',
    component: PatientLayoutComponent,
    canActivate:[AuthGuardGuard], data:{roles: ["patient"]},
    children: [{
      path: '',
      loadChildren: './layouts/patient-layout/patient-layout.module#PatientLayoutModule'
    }] 

  
  },

  //for staff
  {
    path: 'staff',
    redirectTo: 'staff/staff/patients',
    pathMatch: 'full',
    canActivate:[AuthGuardGuard], data:{roles: ["staff"]}
  }, {
    path: 'staff',
    component: StaffLayoutComponent,
    canActivate:[AuthGuardGuard], data:{roles: ["staff"]},
    children: [{
      path: '',
      loadChildren: './layouts/staff-layout/staff-layout.module#StaffLayoutModule'
    }] 

  
  }, 

// system admin dashboard
 {
   path: 'systemAdmin',
 redirectTo: 'systemAdmin/systemAdmin/system-users-list',
  pathMatch: 'full',
  canActivate:[AuthGuardGuard], data:{roles: ["systemAdmin"]}
  
 }, 
    
  
  {
    path: 'systemAdmin',
    component: AdminLayoutComponent,
    canActivate:[AuthGuardGuard], data:{roles: ["systemAdmin"]},
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
    canActivate:[AuthGuardGuard], data:{roles: ["dispensaryAdmin"]},
    children: [{
      path: '',
      loadChildren: './layouts/dispensary-layout/dispensary-layout.module#DispensaryLayoutModule'
    }]
  },

  
  {
    path: 'reset-password',
    component: ForgotPasswordComponent,
    
  },
  {
    path: 'email-verify',
    component: VerifyEmailComponent,
    
  },
  {
    path: 'prescriptions',
    component: PrescriptionComponent,
  },

  // {
  //   path:'bookappointment',
  //   component: BookappointmentListComponent,
  // },
  // {
  //   path:'patient/clinic',
  //   component: ClinicListComponent,
  // },
  // {
  //   path:'patient/hospital',
  //   component: HospitalListComponent,
  // },
  // {
  //   path: 'patient',
  //   redirectTo: 'home',
  //   pathMatch: 'full',
  // },

   

  
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

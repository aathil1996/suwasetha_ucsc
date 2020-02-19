import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DispensaryBarComponent } from './dispensary-bar/dispensary-bar.component';
import { DoctorSidebarComponent } from 'app/doctor-bars/doctor-sidebar/doctor-sidebar.component';
import { DoctrosBarComponent } from './doctros-bar/doctros-bar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
<<<<<<< HEAD
import { HosAdminBarComponent } from './hosadmin-bar/hosadmin-bar.component';
import { HosAdminSidebarComponent } from '../../app/hosadmin-bars/hosadmin-sidebar/hosadmin-sidebar.component';
=======

import { BannerComponent } from 'app/banner/banner.component';
import { HeaderComponent } from 'app/header/header.component';
import { HowWorksComponent } from 'app/how-works/how-works.component';
import { TestimonalsComponent } from 'app/testimonals/testimonals.component';
import { CounterComponent } from 'app/counter/counter.component';
import { JobCategoriesComponent } from 'app/job-categories/job-categories.component';
import { PrescriptionsComponent } from 'app/layouts/doctor-components/prescription/prescriptions/prescriptions.component';
import { PateintBarComponent } from './pateint-bar/pateint-bar.component';
import { PatientSidebarComponent } from 'app/patient-bars/patient-sidebar/patient-sidebar.component';

import { TitleBarComponent } from './title-bar/title-bar.component';
import { LoginComponent } from 'app/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StaffSidebarComponent} from 'app/staff-bars/staff-sidbar/staff-sidebar.component';
import { StafBarComponent} from './staf-bar/staf-bar.component';


>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
<<<<<<< HEAD
=======
    FormsModule,
    ReactiveFormsModule,
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    DispensaryBarComponent,
    DoctorSidebarComponent,
    DoctrosBarComponent,
<<<<<<< HEAD
=======

    BannerComponent,
    HeaderComponent,
    HowWorksComponent,
    TestimonalsComponent,
    CounterComponent,
    JobCategoriesComponent,
    PatientSidebarComponent,
    

    StaffSidebarComponent,
    
    StafBarComponent,

>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
   
  //  DoctrosBarComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    DoctorSidebarComponent,
<<<<<<< HEAD
    HosAdminBarComponent,
    HosAdminSidebarComponent
=======

    PateintBarComponent,
    

    TitleBarComponent,
    LoginComponent,
    

>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    DispensaryBarComponent,
    DoctorSidebarComponent,
    DoctrosBarComponent,
<<<<<<< HEAD
  //  DoctrosBarComponent,
    DoctorSidebarComponent,
    HosAdminBarComponent,
    HosAdminSidebarComponent
=======

  //  DoctrosBarComponent,
    DoctorSidebarComponent,
    BannerComponent,
    HeaderComponent,
    HowWorksComponent,
    TestimonalsComponent,
    CounterComponent,
    JobCategoriesComponent,
    PatientSidebarComponent,
    PateintBarComponent,


    DoctorSidebarComponent,
    TitleBarComponent,
    LoginComponent,
    StafBarComponent,
    StaffSidebarComponent

>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
   
  ]
})
export class ComponentsModule { }

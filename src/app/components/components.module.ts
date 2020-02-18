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
import { HosAdminBarComponent } from './hosadmin-bar/hosadmin-bar.component';
import { HosAdminSidebarComponent } from '../../app/hosadmin-bars/hosadmin-sidebar/hosadmin-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    DispensaryBarComponent,
    DoctorSidebarComponent,
    DoctrosBarComponent,
   
  //  DoctrosBarComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    DoctorSidebarComponent,
    HosAdminBarComponent,
    HosAdminSidebarComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    DispensaryBarComponent,
    DoctorSidebarComponent,
    DoctrosBarComponent,
  //  DoctrosBarComponent,
    DoctorSidebarComponent,
    HosAdminBarComponent,
    HosAdminSidebarComponent
   
  ]
})
export class ComponentsModule { }

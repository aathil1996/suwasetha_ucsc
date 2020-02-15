import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DispensaryBarComponent } from './dispensary-bar/dispensary-bar.component';
import { DoctorsComponent } from 'app/layouts/adminComponents/doctors/doctors.component';
import { DoctrosBarComponent } from './doctros-bar/doctros-bar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

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
    DoctrosBarComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    DispensaryBarComponent,
    DoctrosBarComponent
  ]
})
export class ComponentsModule { }

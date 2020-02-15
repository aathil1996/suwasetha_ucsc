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
import { BannerComponent } from 'app/banner/banner.component';
import { HeaderComponent } from 'app/header/header.component';
import { HowWorksComponent } from 'app/how-works/how-works.component';
import { TestimonalsComponent } from 'app/testimonals/testimonals.component';
import { CounterComponent } from 'app/counter/counter.component';
import { JobCategoriesComponent } from 'app/job-categories/job-categories.component';
import { PrescriptionsComponent } from 'app/layouts/doctor-components/prescription/prescriptions/prescriptions.component';

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
    BannerComponent,
    HeaderComponent,
    HowWorksComponent,
    TestimonalsComponent,
    CounterComponent,
    JobCategoriesComponent,
    
   
  //  DoctrosBarComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    DoctorSidebarComponent,
    
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
    BannerComponent,
    HeaderComponent,
    HowWorksComponent,
    TestimonalsComponent,
    CounterComponent,
    JobCategoriesComponent,
    

   
  ]
})
export class ComponentsModule { }

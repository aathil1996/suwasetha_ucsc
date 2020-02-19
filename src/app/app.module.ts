import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { MDBBootstrapModule } from 'angular-bootstrap-md';
=======
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';


import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';


<<<<<<< HEAD
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
//import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './shared/notifications/notifications.component';

import {
  AgmCoreModule
} from '@agm/core';

=======
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'environments/environment';
import { AvatarDialogComponent } from './avatar-dialog/avatar-dialog.component';
<<<<<<< HEAD
import { MatDialogModule, MatButtonModule, MatInputModule, MatSliderModule } from '@angular/material';
import { SystemUsersService } from './shared/services/system-users.service';
import { PrescriptionsService} from './shared/services/prescriptions.service';
import { ClinicsService } from './shared/services/clinics.service';
import {StaffService} from './shared/services/staff.service';
import {DoctorsService} from './shared/services/doctors.service';
=======
import { MatDialogModule, MatSliderModule } from '@angular/material';
import { SystemUsersService } from './shared/services/system-users.service';
import { PrescriptionsService} from './shared/services/prescriptions.service';
import { PatientDetailsService} from './shared/services/patientdetails.service';
import {LookClinicsService} from './shared/services/lookclinics.service';

>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
import { MaterialModule } from './shared/material/material.module';
import { RoleService } from './shared/services/role.service';
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { DoctorLayoutComponent } from './layouts/doctor-layout/doctor-layout.component';
import { Testing2Component } from './testing2/testing2.component';
import { ComponentsModule } from './components/components.module';
import { LoginComponent } from './login/login.component';
import { PatientsComponent } from './layouts/adminComponents/Patients/patients/patients.component';
import { PatientsListComponent } from './layouts/adminComponents/Patients/patients-list/patients-list.component';
import { BlogListComponent } from './layouts/adminComponents/blog/blog-list/blog-list.component';
import { ArticlesComponent } from './layouts/adminComponents/blog/articles/articles.component';


import { HospitalListComponent } from './layouts/adminComponents/Hospital/hospital-list/hospital-list.component';
// { DispensaryComponentComponent } from './layouts/dispensary-component/dispensary-component.component';
import { DoctorFooterComponent } from './doctor-bars/doctor-footer/doctor-footer.component';
import { DoctorNavbarComponent } from './doctor-bars/doctor-navbar/doctor-navbar.component';
import { DoctorSidebarComponent } from './doctor-bars/doctor-sidebar/doctor-sidebar.component';
import { DispensaryLayoutComponent } from './layouts/dispensary-layout/dispensary-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';
//import { HospitalAdminLayoutModule } from './layouts/hospitaladmin-layout/hospitaladmin-layout.module';
import { HospitalAdminLayoutComponent } from './layouts/hospitaladmin-layout/hospitaladmin-layout.component';


// import { HospitalAdminComponentsComponent } from './layouts/hospitaladmin-components/hospitaladmin-components.component';
// import { ClinicsComponent } from './layouts/hospitaladmin-components/clinics/clinics.component';
//import { DashboardComponent } from './layouts/hospitaladmin-components/dashboard/dashboard.component';
//import { ClinicsListComponent } from './layouts/hospitaladmin-components/clinics/clinics-list/clinics-list.component';
//import { AddClinicsComponent } from './layouts/hospitaladmin-components/clinics/add-clinics/add-clinics.component';
//import { StaffListComponent } from './layouts/hospitaladmin-components/staff/staff-list/staff-list.component';
//import { AddStaffComponent } from './layouts/hospitaladmin-components/staff/add-staff/add-staff.component';
//import { HosAdminSidebarComponent } from './hosadmin-bars/hosadmin-sidebar/hosadmin-sidebar.component';
=======
import { PrescriptionComponent } from './prescription/prescription.component';
import { DoctorLayoutComponent } from './layouts/doctor-layout/doctor-layout.component';
import { ComponentsModule } from './components/components.module';


//import { HospitalListComponent } from './layouts/adminComponents/Hospital/hospital-list/hospital-list.component';
// { DispensaryComponentComponent } from './layouts/dispensary-component/dispensary-component.component';

import { DoctorFooterComponent } from './doctor-bars/doctor-footer/doctor-footer.component';
import { DoctorNavbarComponent } from './doctor-bars/doctor-navbar/doctor-navbar.component';
import { DispensaryLayoutComponent } from './layouts/dispensary-layout/dispensary-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';

import { AppointmentsComponent } from './appointments/appointments.component';
import { Nav2Component } from './nav2/nav2.component';
import { BannerComponent } from './banner/banner.component';
//import { AboutComponent } from 'app/layouts/patient-components/about/about.component';
import {MatDatepickerModule} from '@angular/material';

//import { ClinicComponent } from 'app/layouts/patient-components/clinic/clinic.component';


import { DoctorsComponent } from './doctors/doctors.component';


//import { HospitalComponent } from 'app/layouts/patient-components/hospital/hospital.component';

import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
import { PrescriptionsComponent } from './layouts/doctor-components/prescription/prescriptions/prescriptions.component';
//import { BookappointmentListComponent } from 'app/layouts/patient-components/bookappointment/bookappointment-list/bookappointment-list.component';
//import { BookappointmentComponent } from 'app/layouts/patient-components/bookappointment/bookappointment.component';
import { BookappointmentService } from './shared/services/bookappointment.service';
//import { ClinicListComponent } from 'app/layouts/patient-components/clinic/clinic-list/clinic-list.component';
import { ClinicService } from './shared/services/clinic.service';
//import { HospitalListComponent } from 'app/layouts/patient-components/hospital/hospital-list/hospital-list.component';
import { HospitalService } from './shared/services/hospital.service';
import { PatientFooterComponent } from './patient-bars/patient-footer/patient-footer.component';
import { PatientNavbarComponent } from './patient-bars/patient-navbar/patient-navbar.component';
import { PatientLayoutComponent } from './layouts/patient-layout/patient-layout.component';

import { PatientService } from './shared/services/patient.service';
import { AboutComponent } from './main/about/about.component';

import { StaffLayoutComponent } from './layouts/staff-layout/staff-layout.component';
import { UpdatepatientComponent } from './layouts/doctor-components/patientdetails/updatepatient/updatepatient.component';
import { BlogComponent } from './main/blog/blog.component';
import { ContactComponent } from './main/contact/contact.component';
import { BookingComponent } from './layouts/patient-components/booking/booking.component';
import { BookingListComponent } from './layouts/patient-components/booking-list/booking-list.component';




>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
 //import { DoctorComponentsComponent } from './layouts/doctor-components/doctor-components.component';
// import { DashboardComponent } from './layouts/doctor-components/dashboard/dashboard.component';
// import { UserProfileComponent } from './layouts/doctor-components/user-profile/user-profile.component';
//import { AppointmentsComponent } from './layouts/doctor-components/appointments/appointments.component';
//import { PrescriptionsComponent } from './layouts/doctor-components/prescriptions/prescriptions.component';
//import { BlogPostsComponent } from './layouts/doctor-components/blog-posts/blog-posts.component';


@NgModule({
  imports: [
<<<<<<< HEAD
    MDBBootstrapModule.forRoot(),
=======
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    AdminLayoutModule,
<<<<<<< HEAD
    //HospitalAdminLayoutModule,
=======
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
    RouterModule,
    FormsModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDialogModule,
    MaterialModule,
<<<<<<< HEAD
=======
    MatDatepickerModule,
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
    ToastrModule.forRoot()
   /* AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })*/
  ],
  declarations: [
    AppComponent,
    AvatarDialogComponent,
    ConfirmDialogComponent,
    DispensaryLayoutComponent,
    HomeComponent,
    DoctorLayoutComponent,
    AdminLayoutComponent,
<<<<<<< HEAD
    HospitalAdminLayoutComponent,
=======

    StaffLayoutComponent,
  
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
   
    

    //DispensaryComponentComponent,

<<<<<<< HEAD
    

  
    DoctorFooterComponent,

    DoctorNavbarComponent,

    

    

    

    // DashboardComponent,

    // ClinicsListComponent,

    // AddClinicsComponent,

  

    // HosAdminSidebarComponent,

    

=======
   

  

    DoctorFooterComponent,
    DoctorNavbarComponent,

    AppointmentsComponent,
    Nav2Component,


    AboutComponent,

    ContactComponent,

    
    UpdatepatientComponent,

    
    BlogComponent,
    DoctorsComponent,
    IndexComponent,
    RegisterComponent,
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
   // DoctorComponentsComponent,

    //AppointmentsComponent,

    //PrescriptionsComponent,
<<<<<<< HEAD
=======
    PrescriptionComponent,
   //BookappointmentListComponent,
   //ClinicListComponent,
   //HospitalListComponent,
   PatientFooterComponent,
   PatientNavbarComponent,
  PatientLayoutComponent,
  

   //PatientSidebarComponent
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e




  ],
<<<<<<< HEAD
  providers: [SystemUsersService, RoleService, PrescriptionsService , StaffService , DoctorsService, ClinicsService],
=======


  

  providers: [SystemUsersService, RoleService, PrescriptionsService, BookappointmentService, ClinicService, HospitalService,PatientService,LookClinicsService,PatientDetailsService],

  

>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDialogComponent]
})
export class AppModule { }

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';


import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';


import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { NotificationsComponent } from './shared/notifications/notifications.component';

import {
  AgmCoreModule
} from '@agm/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'environments/environment';
import { AvatarDialogComponent } from './avatar-dialog/avatar-dialog.component';
import { MatDialogModule, MatButtonModule, MatInputModule, MatSliderModule } from '@angular/material';
import { SystemUsersService } from './shared/services/system-users.service';
import { PrescriptionsService} from './shared/services/prescriptions.service';
import { ClinicsService } from './shared/services/clinics.service';
import {StaffService} from './shared/services/staff.service';
import {DoctorsService} from './shared/services/doctors.service';
import { PatientDetailsService} from './shared/services/patientdetails.service';
import {LookClinicsService} from './shared/services/lookclinics.service';

import { MaterialModule } from './shared/material/material.module';
import { RoleService } from './shared/services/role.service';
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';
import { HomeComponent } from './home/home.component';
import { DoctorLayoutComponent } from './layouts/doctor-layout/doctor-layout.component';
import { Testing2Component } from './testing2/testing2.component';
import { ComponentsModule } from './components/components.module';
import { LoginComponent } from './login/login.component';
import { PatientsComponent } from './layouts/adminComponents/Patients/patients/patients.component';
import { PatientsListComponent } from './layouts/adminComponents/Patients/patients-list/patients-list.component';
import { BlogListComponent } from './layouts/adminComponents/blog/blog-list/blog-list.component';
import { ArticlesComponent } from './layouts/adminComponents/blog/articles/articles.component';


import { HospitalListComponent } from './layouts/adminComponents/Hospital/hospital-list/hospital-list.component';

import { DoctorFooterComponent } from './doctor-bars/doctor-footer/doctor-footer.component';
import { DoctorNavbarComponent } from './doctor-bars/doctor-navbar/doctor-navbar.component';
import { DoctorSidebarComponent } from './doctor-bars/doctor-sidebar/doctor-sidebar.component';
import { DispensaryLayoutComponent } from './layouts/dispensary-layout/dispensary-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';
import { HospitalAdminLayoutComponent } from './layouts/hospitaladmin-layout/hospitaladmin-layout.component';



import { PrescriptionComponent } from './prescription/prescription.component';


import { AppointmentsComponent } from './appointments/appointments.component';
import { Nav2Component } from './nav2/nav2.component';
import { BannerComponent } from './banner/banner.component';

import {MatDatepickerModule} from '@angular/material';



import { DoctorsComponent } from './doctors/doctors.component';




import { IndexComponent } from './index/index.component';
import { RegisterComponent } from './register/register.component';
import { PrescriptionsComponent } from './layouts/doctor-components/prescription/prescriptions/prescriptions.component';

import { BookappointmentService } from './shared/services/bookappointment.service';

import { ClinicService } from './shared/services/clinic.service';

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




 


@NgModule({
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    AdminLayoutModule,
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
    MatDatepickerModule,
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
    HospitalAdminLayoutComponent,

    StaffLayoutComponent,
  
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
   
    PrescriptionComponent,
   
   PatientFooterComponent,
   PatientNavbarComponent,
  PatientLayoutComponent,
  

   
  ],
  


  

  providers: [SystemUsersService, RoleService, PrescriptionsService, StaffService, DoctorsService ,  BookappointmentService, ClinicService, HospitalService,PatientService,LookClinicsService,PatientDetailsService],

  

  bootstrap: [AppComponent],
  entryComponents: [ConfirmDialogComponent]
})
export class AppModule { }

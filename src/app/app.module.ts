import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';


import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';




import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'environments/environment';
import { AvatarDialogComponent } from './avatar-dialog/avatar-dialog.component';
import { MatDialogModule, MatSliderModule } from '@angular/material';
import { SystemUsersService } from './shared/services/system-users.service';
import { PrescriptionsService} from './shared/services/prescriptions.service';
import {LookClinicsService} from './shared/services/lookclinics.service';

import { MaterialModule } from './shared/material/material.module';
import { RoleService } from './shared/services/role.service';
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';
import { HomeComponent } from './home/home.component';
import { DoctorLayoutComponent } from './layouts/doctor-layout/doctor-layout.component';
import { ComponentsModule } from './components/components.module';


// { DispensaryComponentComponent } from './layouts/dispensary-component/dispensary-component.component';
import { DoctorFooterComponent } from './doctor-bars/doctor-footer/doctor-footer.component';
import { DoctorNavbarComponent } from './doctor-bars/doctor-navbar/doctor-navbar.component';
import { DispensaryLayoutComponent } from './layouts/dispensary-layout/dispensary-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';
import { PatientService } from './shared/services/patient.service';
import { AboutComponent } from './main/about/about.component';
import { ContactComponent } from './main/contact/contact.component';
import { DoctorsListComponent } from './layouts/adminComponents/doctors-list/doctors-list.component';
import { HospitalAdminListComponent } from './layouts/adminComponents/hospital-admin-list/hospital-admin-list.component';
import { HospitalAdminComponent } from './layouts/adminComponents/hospital-admin/hospital-admin.component';
import { StaffLayoutComponent } from './layouts/staff-layout/staff-layout.component';


 //import { DoctorComponentsComponent } from './layouts/doctor-components/doctor-components.component';
// import { DashboardComponent } from './layouts/doctor-components/dashboard/dashboard.component';
// import { UserProfileComponent } from './layouts/doctor-components/user-profile/user-profile.component';
//import { AppointmentsComponent } from './layouts/doctor-components/appointments/appointments.component';
//import { PrescriptionsComponent } from './layouts/doctor-components/prescriptions/prescriptions.component';
//import { BlogPostsComponent } from './layouts/doctor-components/blog-posts/blog-posts.component';


@NgModule({
  imports: [
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
    StaffLayoutComponent,
  
   
    

    //DispensaryComponentComponent,

   

  
    DoctorFooterComponent,

    DoctorNavbarComponent,

    AboutComponent,

    ContactComponent,

    HospitalAdminListComponent,

    HospitalAdminComponent,

   

    

   // DoctorComponentsComponent,

    //AppointmentsComponent,

    //PrescriptionsComponent,




  ],
  providers: [SystemUsersService, RoleService, PrescriptionsService, PatientService],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDialogComponent]
})
export class AppModule { }

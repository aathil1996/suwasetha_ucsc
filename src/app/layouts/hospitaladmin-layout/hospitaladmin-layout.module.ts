import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HospitalAdminLayoutRoutes } from './hospitaladmin-layout.routing';
//import { DashboardComponent} from 'app/layouts/hospitaladmin-components/dashboard/dashboard.component';
// import { DashboardComponent } from '../hospitaladminComponents/dashboard/dashboard.component';
// import { UserProfileComponent } from '../adminComponents/user-profile/user-profile.component';


import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatTableModule,
  MatPaginatorModule,
  MatExpansionModule
} from '@angular/material';

// import { HospitalsComponent } from 'app/layouts/adminComponents/Hospital/hospitals/hospitals.component';
// import { BlogPostsComponent } from 'app/layouts/adminComponents/blog/blog-posts/blog-posts.component';
import { MaterialModule } from 'app/shared/material/material.module';
import { DashboardComponent} from 'app/layouts/hospitaladmin-components/dashboard/dashboard.component';

// import { SystemUsersListComponent } from 'app/systemUsers/system-users-list/system-users-list.component';
// import { SystemUsersComponent } from 'app/systemUsers/system-users/system-users.component';
// import { HospitalListComponent } from '../adminComponents/Hospital/hospital-list/hospital-list.component';
import { AddClinicsComponent } from 'app/layouts/hospitaladmin-components/clinics/add-clinics/add-clinics.component';
import { StaffComponent} from 'app/layouts/hospitaladmin-components/staff/add-staff/add-staff.component';
import {DoctorsComponent} from 'app/layouts/hospitaladmin-components/Doctors/doctors/doctors.component';
import {DoctorsListComponent}from 'app/layouts/hospitaladmin-components/Doctors/doctors-list/doctors-list.component';
import { StaffListComponent} from 'app/layouts/hospitaladmin-components/staff/staff-list/staff-list.component';
import { ClinicsListComponent } from 'app/layouts/hospitaladmin-components/clinics/clinics-list/clinics-list.component';
import { AdminLayoutModule } from '../admin-layout/admin-layout.module';
// import { BlogListComponent } from '../adminComponents/blog/blog-list/blog-list.component';
// import { ArticlesComponent } from '../adminComponents/blog/articles/articles.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(HospitalAdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MaterialModule,
    MatExpansionModule,
    AdminLayoutModule
    
  ],
 
  declarations: [
     DashboardComponent,
     
    // HospitalsComponent,
    // UserProfileComponent,
    // BlogPostsComponent,
    // BlogListComponent,
    // ArticlesComponent,
    // SystemUsersListComponent,
    // SystemUsersComponent,
    // HospitalListComponent,
  
    ClinicsListComponent,
    AddClinicsComponent,
    StaffComponent,
    StaffListComponent,
    DoctorsListComponent,
    DoctorsComponent
    
    

   /* TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,*/
  ],
  entryComponents: [ AddClinicsComponent,ClinicsListComponent,StaffListComponent,StaffComponent,DoctorsComponent,DoctorsListComponent]
  
})

export class HospitalAdminLayoutModule {}

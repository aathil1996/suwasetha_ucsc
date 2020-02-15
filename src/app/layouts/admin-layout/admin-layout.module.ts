import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../adminComponents/dashboard/dashboard.component';
import { UserProfileComponent } from '../adminComponents/user-profile/user-profile.component';


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

import { HospitalsComponent } from 'app/layouts/adminComponents/Hospital/hospitals/hospitals.component';
import { BlogPostsComponent } from 'app/layouts/adminComponents/blog/blog-posts/blog-posts.component';
import { MaterialModule } from 'app/shared/material/material.module';
import { SystemUsersListComponent } from 'app/systemUsers/system-users-list/system-users-list.component';
import { SystemUsersComponent } from 'app/systemUsers/system-users/system-users.component';
import { HospitalListComponent } from '../adminComponents/Hospital/hospital-list/hospital-list.component';
import { PatientsComponent } from '../adminComponents/Patients/patients/patients.component';
import { PatientsListComponent } from '../adminComponents/Patients/patients-list/patients-list.component';
import { BlogListComponent } from '../adminComponents/blog/blog-list/blog-list.component';
import { ArticlesComponent } from '../adminComponents/blog/articles/articles.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
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
    MatExpansionModule
  ],
  exports: [
    BlogPostsComponent
  ],
  declarations: [
    DashboardComponent,
    HospitalsComponent,
    UserProfileComponent,
    BlogPostsComponent,
    BlogListComponent,
    ArticlesComponent,
    SystemUsersListComponent,
    SystemUsersComponent,
    HospitalListComponent,
    PatientsComponent,
    PatientsListComponent,
    

   /* TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,*/
  ],
  entryComponents: [SystemUsersComponent, HospitalsComponent, PatientsComponent, BlogPostsComponent, BlogListComponent,
    ArticlesComponent,]
  
})

export class AdminLayoutModule {}

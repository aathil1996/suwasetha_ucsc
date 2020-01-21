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
  MatPaginatorModule
} from '@angular/material';

import { HospitalsComponent } from 'app/layouts/adminComponents/hospitals/hospitals.component';
import { BlogPostsComponent } from 'app/layouts/adminComponents/blog-posts/blog-posts.component';
import { MaterialModule } from 'app/shared/material/material.module';
import { SystemUsersListComponent } from 'app/systemUsers/system-users-list/system-users-list.component';
import { SystemUsersComponent } from 'app/systemUsers/system-users/system-users.component';
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
    MaterialModule
  ],
  declarations: [
    DashboardComponent,
    HospitalsComponent,
    UserProfileComponent,
    BlogPostsComponent,
    SystemUsersListComponent,
    SystemUsersComponent

   /* TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,*/
  ],
  entryComponents: [SystemUsersComponent]
  
})

export class AdminLayoutModule {}

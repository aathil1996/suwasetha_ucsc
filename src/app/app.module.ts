import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';

import { DashboardComponent } from './layouts/adminComponents/dashboard/dashboard.component';
import { UserProfileComponent } from './layouts/adminComponents/user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
//import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './shared/notifications/notifications.component';

import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'environments/environment';
import { AvatarDialogComponent } from './avatar-dialog/avatar-dialog.component';
import { MatDialogModule, MatButtonModule, MatInputModule, MatSliderModule } from '@angular/material';
import { DoctorsComponent } from './layouts/adminComponents/doctors/doctors.component';
import { HospitalsComponent } from './layouts/adminComponents/Hospital/hospitals/hospitals.component';
import { BlogPostsComponent } from './layouts/adminComponents/blog-posts/blog-posts.component';
import { SystemUsersService } from './shared/services/system-users.service';
import { MaterialModule } from './shared/material/material.module';
import { RoleService } from './shared/services/role.service';
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';
import { SystemUsersComponent } from './systemUsers/system-users/system-users.component';
import { HospitalListComponent } from './layouts/adminComponents/Hospital/hospital-list/hospital-list.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
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
    AdminLayoutComponent,
    AvatarDialogComponent,
    ConfirmDialogComponent,
   

  ],
  providers: [SystemUsersService, RoleService, HospitalsComponent],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDialogComponent]
})
export class AppModule { }

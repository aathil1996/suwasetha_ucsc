import { Routes } from '@angular/router';

import { DashboardComponent } from '../adminComponents/dashboard/dashboard.component';
import { UserProfileComponent } from '../adminComponents/user-profile/user-profile.component';

import { HospitalsComponent } from '../adminComponents/Hospital/hospitals/hospitals.component';
import { BlogPostsComponent } from '../adminComponents/blog/blog-posts/blog-posts.component';
import { SystemUsersListComponent } from 'app/systemUsers/system-users-list/system-users-list.component';
import { HospitalListComponent } from '../adminComponents/Hospital/hospital-list/hospital-list.component';
import { TestingComponent } from 'app/testing/testing.component';
<<<<<<< HEAD
=======
import { HomeComponent } from 'app/home/home.component';
import { PrescriptionComponent } from 'app/prescription/prescription.component';
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e


export const DispensaryLayoutRoutes: Routes = [
    
  
    
    { path: 'dispensaryAdmin/testing',   component: TestingComponent },
<<<<<<< HEAD
    
=======
    { path: 'dispensaryAdmin/prescription',   component:  PrescriptionComponent},
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
   
  
];

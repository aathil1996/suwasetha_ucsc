import { Routes } from '@angular/router';

//import { DashboardComponent } from '../adminComponents/dashboard/dashboard.component';
import { UserProfileComponent } from '../adminComponents/user-profile/user-profile.component';

import { HospitalsComponent } from '../adminComponents/Hospital/hospitals/hospitals.component';
// import { BlogPostsComponent } from '../adminComponents/blog/blog-posts/blog-posts.component';
// import { SystemUsersListComponent } from 'app/systemUsers/system-users-list/system-users-list.component';
// import { HospitalListComponent } from '../adminComponents/Hospital/hospital-list/hospital-list.component';
import { ClinicsListComponent } from 'app/layouts/hospitaladmin-components/clinics/clinics-list/clinics-list.component';
import { StaffListComponent} from 'app/layouts/hospitaladmin-components/staff/staff-list/staff-list.component'; 
import {DoctorsListComponent} from 'app/layouts/hospitaladmin-components/Doctors/doctors-list/doctors-list.component';
import { DashboardComponent } from '../hospitaladmin-components/dashboard/dashboard.component';
import { BlogModule } from '../adminComponents/blog/blog.module';
import { Component } from '@angular/core';
// import { BlogListComponent } from '../adminComponents/blog/blog-list/blog-list.component';
// import { ArticlesComponent } from '../adminComponents/blog/articles/articles.component';
/*import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
*/

export const HospitalAdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'hospitalAdmin/dashboard',component: DashboardComponent },
    {path: 'hospitalAdmin/clinics', component:ClinicsListComponent},
    {path: 'hospitalAdmin/staff', component: StaffListComponent},
    {path: 'hospitalAdmin/doctors',component:DoctorsListComponent}
    // {path: 'hospitalsystemAdmin/staff-list', component:StaffListComponent},
    // { path: 'systemAdmin/user-profile',   component: UserProfileComponent },
    // { path: 'systemAdmin/hospitals',   component: HospitalListComponent },
    // { path: 'systemAdmin/blog-posts',   component: BlogListComponent },
    // { path: 'systemAdmin/blog-posts/id', component: ArticlesComponent },
    // { path: 'systemAdmin/blogAdd', component:BlogPostsComponent }
    //{ path: 'systemAdmin/blog',   loadChildren: '../adminComponents/blog/blog.module#BlogModule' }
    // sssss
   
    /*{ path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },*/
];

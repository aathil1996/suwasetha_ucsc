import { Routes } from '@angular/router';

import { DashboardComponent } from '../doctor-components/dashboard/dashboard.component';
import { UserProfileComponent } from '../doctor-components/user-profile/user-profile.component';

import { AppointmentsComponent } from '../doctor-components/appointments/appointments.component';
import { BlogPostsComponent } from '../doctor-components/blog-posts/blog-posts.component';

import { PrescriptionsListComponent } from 'app/layouts/doctor-components/prescription/prescriptions-list/prescriptions-list.component';
<<<<<<< HEAD

=======
import { PatientdetailsComponent} from 'app/layouts/doctor-components/patientdetails/patientdetails.component';
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
/*import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
*/

export const DoctorLayoutRoutes: Routes = [
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
    { path: 'doctor/dashboard',      component: DashboardComponent },
    {path: 'doctor/appointments', component:AppointmentsComponent},
    { path: 'doctor/user-profile',   component: UserProfileComponent },
    { path: 'doctor/prescriptions',   component: PrescriptionsListComponent },
    { path: 'doctor/blog-posts',   component: BlogPostsComponent },
<<<<<<< HEAD
=======
    {path: 'doctor/patientdetails', component:PatientdetailsComponent}
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
   
   
    /*{ path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },*/
];

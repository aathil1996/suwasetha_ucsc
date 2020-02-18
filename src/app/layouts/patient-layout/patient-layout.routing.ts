import { Routes } from '@angular/router';

//import { BookappointmentListComponent } from 'app/layouts/patient-components/bookappointment/bookappointment-list/bookappointment-list.component';
import { ClinicListComponent } from '../patient-components/clinic/clinic-list/clinic-list.component';
import {HospitalListComponent} from '../patient-components/hospital/hospital-list/hospital-list.component';
import { MaterialModule } from 'app/shared/material/material.module';
import { AboutComponent } from '../patient-components/about/about.component';
import { AdminLayoutModule } from '../admin-layout/admin-layout.module';
import { BookappointmentComponent } from 'app/layouts/patient-components/bookappointment/bookappointment.component';

//import { PrescriptionsListComponent } from 'app/layouts/doctor-components/prescription/prescriptions-list/prescriptions-list.component';

/*import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
*/

export const PatientLayoutRoutes: Routes = [
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
    { path: 'patient/clinics',      component: ClinicListComponent },
    {path: 'patient/hospitals', component:HospitalListComponent},
    { path: 'patient/bookappointment',   component: BookappointmentComponent },
    { path: 'patient/about',   component: AboutComponent },
    //{ path: 'doctor/blog-posts',   component: BlogPostsComponent },
   
   
    /*{ path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },*/
];

import { Routes } from '@angular/router';
import { UserProfileComponent } from '../adminComponents/user-profile/user-profile.component';
import { HospitalsComponent } from '../adminComponents/Hospital/hospitals/hospitals.component';
import { ClinicsListComponent } from 'app/layouts/hospitaladmin-components/clinics/clinics-list/clinics-list.component';
import { StaffListComponent} from 'app/layouts/hospitaladmin-components/staff/staff-list/staff-list.component'; 
import {DoctorsListComponent} from 'app/layouts/hospitaladmin-components/Doctors/doctors-list/doctors-list.component';
import { DashboardComponent } from '../hospitaladmin-components/dashboard/dashboard.component';
import { BlogModule } from '../adminComponents/blog/blog.module';
import { Component } from '@angular/core';


export const HospitalAdminLayoutRoutes: Routes = [
    
    { path: 'hospitalAdmin/dashboard',component: DashboardComponent },
    {path: 'hospitalAdmin/clinics', component:ClinicsListComponent},
    {path: 'hospitalAdmin/staff', component: StaffListComponent},
    {path: 'hospitalAdmin/doctors',component:DoctorsListComponent}
    
];

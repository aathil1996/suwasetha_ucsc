import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HospitalAdminLayoutRoutes } from './hospitaladmin-layout.routing';



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


import { MaterialModule } from 'app/shared/material/material.module';
import { DashboardComponent} from 'app/layouts/hospitaladmin-components/dashboard/dashboard.component';


import { ClinicsComponent } from 'app/layouts/hospitaladmin-components/clinics/add-clinics/add-clinics.component';
import { StaffComponent} from 'app/layouts/hospitaladmin-components/staff/add-staff/add-staff.component';
import {DoctorsComponent} from 'app/layouts/hospitaladmin-components/Doctors/doctors/doctors.component';
import {DoctorsListComponent}from 'app/layouts/hospitaladmin-components/Doctors/doctors-list/doctors-list.component';
import { StaffListComponent} from 'app/layouts/hospitaladmin-components/staff/staff-list/staff-list.component';
import { ClinicsListComponent } from 'app/layouts/hospitaladmin-components/clinics/clinics-list/clinics-list.component';
import { AdminLayoutModule } from '../admin-layout/admin-layout.module';

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
     
   
  
    ClinicsListComponent,
    ClinicsComponent,
    StaffComponent,
    StaffListComponent,
    DoctorsListComponent,
    DoctorsComponent
    
    

   
  ],
  entryComponents: [ ClinicsComponent,ClinicsListComponent,StaffListComponent,StaffComponent,DoctorsComponent,DoctorsListComponent]
  
})

export class HospitalAdminLayoutModule {}

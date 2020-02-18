import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StaffLayoutRoutes } from './staff-layout.routing';




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

import {LookClinicsComponent} from 'app/layouts/staff-components/lookclinics/lookclinics.component';
import { MaterialModule } from 'app/shared/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(StaffLayoutRoutes),
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
    
    LookClinicsComponent,
    


  

   /* TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,*/
  ],


  
})

export class StaffLayoutModule {}

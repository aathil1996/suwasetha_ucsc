import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsLayoutComponent } from './doctors-layout.component';
import { RouterModule } from '@angular/router';
import { DoctorsLayoutRoutes } from './doctors-layout.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatRippleModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatTooltipModule, MatTableModule, MatPaginatorModule } from '@angular/material';
import { MaterialModule } from 'app/shared/material/material.module';
import { Testing2Component } from 'app/testing2/testing2.component';



@NgModule({
  declarations: [
    Testing2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(DoctorsLayoutRoutes),
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
    
  ]
})
export class DoctorsLayoutModule { }

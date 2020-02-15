import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DoctorLayoutComponent } from './layouts/doctor-layout/doctor-layout.component';
import { HomeComponent } from './home/home.component';

// import { DispensaryLayoutComponent } from './layouts/dispensary-layout/dispensary-layout.component';
// import { DoctorLayoutComponent } from './layouts/doctor-layout/doctor-layout.component';

const routes: Routes =[

// for home page
{
  path: '',
  component: HomeComponent
},

  {
    path: 'doctor',
    redirectTo: 'doctor/doctor/dashboard',
    pathMatch: 'full',
  }, {
    path: 'doctor',
    component: DoctorLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/doctor-layout/doctor-layout.module#DoctorLayoutModule'
    }] 

  
    }
  
]

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }

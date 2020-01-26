import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DispensaryLayoutComponent } from './layouts/dispensary-layout/dispensary-layout.component';
import { HomeComponent } from './home/home.component';
import { DoctorsLayoutComponent } from './layouts/doctors-layout/doctors-layout.component';
import { LoginComponent } from './login/login.component';

const routes: Routes =[

// for home page
  {
    path: '',
    component: HomeComponent,
 
  }, 
// system admin dashboard
 {
   path: 'systemAdmin',
 redirectTo: 'systemAdmin/systemAdmin/dashboard',
  pathMatch: 'full',
 }, 
    
  
  {
    path: 'systemAdmin',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  },
 

  // dispensary dashbaord
  {
    path: 'dispensaryAdmin',
  redirectTo: 'dispensaryAdmin/dispensaryAdmin/testing',
   pathMatch: 'full',
  }, 
  {
    path: 'dispensaryAdmin',
    component: DispensaryLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/dispensary-layout/dispensary-layout.module#DispensaryLayoutModule'
    }]
  },

  // doctor dashbaord

  {
    path: 'doctors',
  redirectTo: 'doctors/doctors/testing2',
   pathMatch: 'full',
  }, 
  {
    path: 'doctors',
    component: DoctorsLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/doctors-layout/doctors-layout.module#DoctorsLayoutModule'
    }]
  },
  {
    path: 'login',
    component: LoginComponent,
    
  },
  
];

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

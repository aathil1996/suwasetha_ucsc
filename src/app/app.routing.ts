import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DispensaryLayoutComponent } from './layouts/dispensary-layout/dispensary-layout.component';
import { HomeComponent } from './home/home.component';

const routes: Routes =[


  {
    path: '',
    component: HomeComponent,
 
  }, 

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

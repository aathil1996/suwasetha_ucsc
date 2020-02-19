import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { AuthService } from 'app/shared/services/auth.service';
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e


declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'doctor/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: 'doctor/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: 'doctor/appointments', title:'Appointments', icon:'person', class:''},
    { path: 'doctor/prescriptions', title: 'Prescriptions',  icon:'person', class: '' },
    { path: 'doctor/blog-posts', title: 'Blog Posts',  icon:'person', class: '' },
<<<<<<< HEAD
    
=======
    { path: 'doctor/patientdetails', title:'Patient Details', icon:'person',class:''},
  
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
  
];


@Component({
  selector: 'app-doctor-sidebar',
  templateUrl: './doctor-sidebar.component.html',
  styleUrls: ['./doctor-sidebar.component.scss']
})
export class DoctorSidebarComponent implements OnInit {

  menuItems: any[];

<<<<<<< HEAD
  constructor() { }
=======
  constructor(
    private auth: AuthService
  ) { }
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

<<<<<<< HEAD
=======
  
  logout(){
    this.auth.logout();
  }

>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
}


import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/shared/services/auth.service';


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
    { path: 'doctor/patientdetails', title:'Patient Details', icon:'person',class:''},
  
  
];


@Component({
  selector: 'app-doctor-sidebar',
  templateUrl: './doctor-sidebar.component.html',
  styleUrls: ['./doctor-sidebar.component.scss']
})
export class DoctorSidebarComponent implements OnInit {

  menuItems: any[];

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

  
  logout(){
    this.auth.logout();
  }

}


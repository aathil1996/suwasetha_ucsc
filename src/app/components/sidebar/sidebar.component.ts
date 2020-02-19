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
<<<<<<< HEAD
  { path: 'systemAdmin/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
  { path: 'systemAdmin/patients-list', title:'Patients', icon:'person', class:''},
  { path: 'systemAdmin/system-users-list', title:'System Users', icon:'person', class:''},
  { path: 'systemAdmin/hospitals', title: 'Hospitals',  icon:'person', class: '' },
  { path: 'systemAdmin/blog-posts', title: 'Blog Posts',  icon:'person', class: '' },
   { path: 'systemAdmin/user-profile', title: 'User Profile',  icon:'person', class: '' },
    // { path: '/testing', title: 'Testing',  icon:'person', class: '' },
    
   /* { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },*/
=======
  // { path: 'systemAdmin/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
  { path: 'systemAdmin/patients-list', title:'Patients', icon:'accessible', class:''},
  { path: 'systemAdmin/system-users-list', title:'System Admin', icon:'build', class:''},
  { path: 'systemAdmin/doctors', title: 'Doctors',  icon:'assignment_ind', class: '' },
  { path: 'systemAdmin/hospital-admin', title: 'Hospital Admins',  icon:'pan_tool', class: '' },
  { path: 'systemAdmin/clinic-admin', title: 'Clinic Admins',  icon:'supervised_user_circle', class: '' },
  { path: 'systemAdmin/hospitals', title: 'Hospitals',  icon:'local_hospital', class: '' },
  { path: 'systemAdmin/blog-posts', title: 'Blog Posts',  icon:'attachment', class: '' },
  //  { path: 'systemAdmin/user-profile', title: 'User Profile',  icon:'person', class: '' },
    // { path: '/testing', title: 'Testing',  icon:'person', class: '' },
  
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

<<<<<<< HEAD
  constructor() { }
=======
  constructor(private auth: AuthService) { }
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

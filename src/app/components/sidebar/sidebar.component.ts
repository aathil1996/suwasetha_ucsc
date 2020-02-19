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
  
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private auth: AuthService) { }

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

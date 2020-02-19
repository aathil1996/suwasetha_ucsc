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
  // { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
  // { path: '/system-users-list', title:'System Users List', icon:'person', class:''},
  // { path: '/hospitals', title: 'Hospitals',  icon:'person', class: '' },
  // { path: '/blog-posts', title: 'Blog Posts',  icon:'person', class: '' },
  //  { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: 'dispensaryAdmin/testing', title: 'Testing',  icon:'person', class: '' },
<<<<<<< HEAD
=======
    { path: 'dispensaryAdmin/prescription', title: 'Prescription',  icon:'person', class: '' },
>>>>>>> 93865be78d0dd6cf9dab62de4d7b62b84b8e7b8e
    
   /* { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },*/
];

@Component({
  selector: 'app-dispensary-bar',
  templateUrl: './dispensary-bar.component.html',
  styleUrls: ['./dispensary-bar.component.scss']
})
export class DispensaryBarComponent implements OnInit {
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

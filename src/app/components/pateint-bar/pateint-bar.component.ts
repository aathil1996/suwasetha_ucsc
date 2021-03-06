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
  // { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
  // { path: '/system-users-list', title:'System Users List', icon:'person', class:''},
  // { path: '/hospitals', title: 'Hospitals',  icon:'person', class: '' },
  // { path: '/blog-posts', title: 'Blog Posts',  icon:'person', class: '' },
  //  { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: 'patient/testing2', title: 'Testing',  icon:'person', class: '' },
    
   /* { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },*/
];


@Component({
  selector: 'app-pateint-bar',
  templateUrl: './pateint-bar.component.html',
  styleUrls: ['./pateint-bar.component.scss']
})
export class PateintBarComponent implements OnInit {

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

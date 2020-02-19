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
    { path: 'staff/clinics', title:'Clinics', icon:'person', class:''},
    
    
  
];


@Component({
  selector: 'app-staff-sidebar',
  templateUrl: './staff-sidebar.component.html',
  styleUrls: ['./staff-sidebar.component.scss']
})
export class StaffSidebarComponent implements OnInit {

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


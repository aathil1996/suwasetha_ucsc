import { Component, OnInit } from '@angular/core';


declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'hospitalAdmin/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: 'hospitalAdmin/clinics', title: 'Clinics',  icon:'person', class: '' },
    { path: 'hospitalAdmin/staff', title:'Staff', icon:'person', class:''},
    { path:'hospitalAdmin/doctors', title:'Doctor-Details ' , icon:'person' , class:''},
    {path:'hospitalAdmin/patients' , title:'Add-Patients' , icon:'person' , class:''},
   
  
];


@Component({
  selector: 'app-hosadmin-sidebar',
  templateUrl: './hosadmin-sidebar.component.html',
  styleUrls: ['./hosadmin-sidebar.component.scss']
})
export class HosAdminSidebarComponent implements OnInit {

  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

}


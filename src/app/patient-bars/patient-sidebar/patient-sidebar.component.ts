import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'patient/bookappointment', title: 'Appointments',  icon: 'dashboard', class: '' },
    { path: 'patient/clinic', title: 'Clinics',  icon:'person', class: '' },
    { path: 'patient/hospital', title:'Hospitals', icon:'person', class:''},
    { path: 'patient/about', title: 'About Us',  icon:'person', class: '' },
    //{ path: 'doctor/blog-posts', title: 'Blog Posts',  icon:'person', class: '' },
    
  
];


@Component({
  selector: 'app-patient-sidebar',
  templateUrl: './patient-sidebar.component.html',
  styleUrls: ['./patient-sidebar.component.scss']
})
export class PatientSidebarComponent implements OnInit {
  
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

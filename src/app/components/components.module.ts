import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DispensaryBarComponent } from './dispensary-bar/dispensary-bar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
<<<<<<< HEAD
   
=======
    DispensaryBarComponent
>>>>>>> 7b2ff9b18871bedf2a1fb94b2b59c57fd439a50e
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
<<<<<<< HEAD
    SidebarComponent
   
=======
    SidebarComponent,
    DispensaryBarComponent
>>>>>>> 7b2ff9b18871bedf2a1fb94b2b59c57fd439a50e
  ]
})
export class ComponentsModule { }

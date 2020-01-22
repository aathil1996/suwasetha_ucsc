import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DispensaryFooterComponent } from './dispensary-footer/dispensary-footer.component';
import { DispensaryNavbarComponent } from './dispensary-navbar/dispensary-navbar.component';
import { DispensarySidebarComponent } from './dispensary-sidebar/dispensary-sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    DispensaryFooterComponent,
    DispensaryNavbarComponent,
    DispensarySidebarComponent
  ],
  exports: [
    DispensaryFooterComponent,
    DispensaryNavbarComponent,
    DispensarySidebarComponent
  ]
})
export class DispensaryBarsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatSelectModule,
    Material.MatButtonModule,
    Material.MatTooltipModule,
    Material.MatSnackBarModule,
    Material.MatTableModule,
    Material.MatIconModule,
    Material.MatPaginatorModule,
    Material.MatSortModule,
    Material.MatDialogModule,
    Material.MatExpansionModule,
    Material.MatProgressBarModule,
    Material.MatCardModule,
    Material.MatIconModule

    

  ],
  exports: [
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatSelectModule,
    Material.MatButtonModule,
    Material.MatTooltipModule,
    Material.MatSnackBarModule,
    Material.MatTableModule,
    Material.MatIconModule,
    Material.MatPaginatorModule,
    Material.MatSortModule,
    Material.MatDialogModule,
    Material.MatExpansionModule,
    Material.MatProgressBarModule,
    Material.MatCardModule,
    Material.MatIconModule
  ]
})
export class MaterialModule { }

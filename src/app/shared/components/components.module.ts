import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from './card/card.component';
import { CardCarouselComponent } from './card-carousel/card-carousel.component';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    CardComponent,
    CardCarouselComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    CarouselModule,
    MatDialogModule
  ],
  exports: [
    CardComponent,
    CardCarouselComponent,
    DialogComponent
  ]
})
export class ComponentsModule { }

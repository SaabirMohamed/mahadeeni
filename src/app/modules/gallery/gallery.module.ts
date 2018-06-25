import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { GlobalsharedModule } from '../../shared/globalshared/globalshared.module';

@NgModule({
  imports: [
    CommonModule,
    GalleryRoutingModule,
    GlobalsharedModule
  ],
  declarations: [GalleryComponent]
})
export class GalleryModule { }

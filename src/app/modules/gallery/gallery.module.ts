import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { GlobalsharedModule } from '../../shared/globalshared/globalshared.module';
import { SharedModule } from '../../shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    GalleryRoutingModule,
    GlobalsharedModule
  ],
  declarations: [GalleryComponent]
})
export class GalleryModule { }

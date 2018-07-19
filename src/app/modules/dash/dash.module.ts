import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { DashComponent } from './dash.component';
import { GlobalsharedModule } from '../../shared/globalshared/globalshared.module';
import { HomeeditComponent } from './components/homeedit/homeedit.component';
import { AbouteditComponent } from './components/aboutedit/aboutedit.component';
import { ContacteditComponent } from './components/contactedit/contactedit.component';
import { ProjectseditComponent } from './components/projectsedit/projectsedit.component';
import { PostseditComponent } from './components/postsedit/postsedit.component';
import { EventseditComponent } from './components/eventsedit/eventsedit.component';
import { ContactseditComponent } from './components/contactsedit/contactsedit.component';
import { GalleryeditComponent } from './components/galleryedit/galleryedit.component';

@NgModule({
  imports: [
    CommonModule,
    DashRoutingModule,
    GlobalsharedModule

  ],
  declarations: [DashComponent, HomeeditComponent, AbouteditComponent, ContacteditComponent, ProjectseditComponent, PostseditComponent, EventseditComponent, ContactseditComponent, GalleryeditComponent]
})
export class DashModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalsharedModule } from '../../shared/globalshared/globalshared.module';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    GlobalsharedModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounsellingRoutingModule } from './counselling-routing.module';
import { CounsellingComponent } from './counselling.component';
import { GlobalsharedModule } from '../../shared/globalshared/globalshared.module';
import { AppointmentformComponent } from './components/appointmentform/appointmentform.component';
import { AnonformComponent } from './components/anonform/anonform.component';

@NgModule({
  imports: [
    CommonModule,
    CounsellingRoutingModule,
    GlobalsharedModule
  ],
  declarations: [CounsellingComponent, AppointmentformComponent, AnonformComponent]
})
export class CounsellingModule { }

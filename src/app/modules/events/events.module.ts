import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { GlobalsharedModule } from '../../shared/globalshared/globalshared.module';
import { EventeditComponent } from './components/eventedit/eventedit.component';

// the table


@NgModule({
  imports: [
    CommonModule,
    EventsRoutingModule,
    GlobalsharedModule
  ],
  declarations: [EventsComponent, EventeditComponent]
})
export class EventsModule { }

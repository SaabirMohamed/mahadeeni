import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounsellingRoutingModule } from './counselling-routing.module';
import { CounsellingComponent } from './counselling.component';
import { GlobalsharedModule } from '../../shared/globalshared/globalshared.module';

@NgModule({
  imports: [
    CommonModule,
    CounsellingRoutingModule,
    GlobalsharedModule
  ],
  declarations: [CounsellingComponent]
})
export class CounsellingModule { }

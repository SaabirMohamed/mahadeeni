import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounsellingRoutingModule } from './counselling-routing.module';
import { CounsellingComponent } from './counselling.component';

@NgModule({
  imports: [
    CommonModule,
    CounsellingRoutingModule
  ],
  declarations: [CounsellingComponent]
})
export class CounsellingModule { }

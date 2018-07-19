import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './components/admin/admin.component';
import { GlobalsharedModule } from '../../shared/globalshared/globalshared.module';

@NgModule({
  imports: [
    CommonModule,
    GlobalsharedModule,
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { GlobalsharedModule } from '../../shared/globalshared/globalshared.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    GlobalsharedModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }

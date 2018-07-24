import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { GlobalsharedModule } from '../../shared/globalshared/globalshared.module';
import { DailytipsComponent } from './dailytips/dailytips.component';
import { LinksComponent } from './links/links.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    GlobalsharedModule
  ],
  declarations: [HomeComponent, DailytipsComponent, LinksComponent]
})
export class HomeModule { }

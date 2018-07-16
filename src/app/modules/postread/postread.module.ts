import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalsharedModule } from '../../shared/globalshared/globalshared.module';
import { PostreadRoutingModule } from './postread-routing.module';
import { PostreadComponent } from './postread.component';

@NgModule({
  imports: [
    CommonModule,
    GlobalsharedModule,
    PostreadRoutingModule
  ],
  declarations: [PostreadComponent]
})
export class PostreadModule { }

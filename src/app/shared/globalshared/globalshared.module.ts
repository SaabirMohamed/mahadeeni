import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from '../../services/service.service';
import { AgmCoreModule } from '@agm/core';




@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AgmCoreModule
  ],
  declarations: [],
  exports: [HttpClientModule,AgmCoreModule],
  providers:[ServiceService]
})
export class GlobalsharedModule {}


//so far contacts module links to this

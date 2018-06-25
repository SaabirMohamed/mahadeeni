import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from '../../services/service.service';
import { AgmCoreModule } from '@agm/core';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatTableModule, MatFormFieldModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { EvtableComponent } from './evtable/evtable.component';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AgmCoreModule,MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule,
    MatTableModule,MatFormFieldModule, MatPaginatorModule, MatSortModule
  ],
  declarations: [EvtableComponent],
  exports: [HttpClientModule,AgmCoreModule, MatFormFieldModule, EvtableComponent],
  providers:[ServiceService]
})
export class GlobalsharedModule {}


//so far contacts module links to this

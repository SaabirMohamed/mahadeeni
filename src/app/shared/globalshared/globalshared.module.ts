import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ServiceService } from '../../services/service.service';
import {AngularFireModule} from 'angularfire2';
import { AgmCoreModule } from '@agm/core';
// tslint:disable-next-line:max-line-length
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatTableModule, MatFormFieldModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { EvtableComponent } from './evtable/evtable.component';
import {FormsModule} from '@angular/forms';
import { environment } from '../../../environments/environment';
import { AngularFirestore } from 'angularfire2/firestore';
import {NgxWigModule} from 'ngx-wig';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgxWigModule,
    AngularFireModule.initializeApp(environment.fbconf, 'mahadeeni'),
    AgmCoreModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule,
    MatTableModule, MatFormFieldModule, MatPaginatorModule, MatSortModule
  ],
  declarations: [EvtableComponent],
  exports: [FormsModule,
            HttpClientModule,
            AgmCoreModule,
            MatFormFieldModule, EvtableComponent, AngularFireModule],
  providers: [ServiceService, AngularFirestore]
})
export class GlobalsharedModule {}


// So far contacts module links to this

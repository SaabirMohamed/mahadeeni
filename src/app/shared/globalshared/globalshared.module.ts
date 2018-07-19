import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ServiceService } from '../../services/service.service';
import {AngularFireModule} from 'angularfire2';
import { AgmCoreModule } from '@agm/core';
// tslint:disable-next-line:max-line-length
// import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatTableModule, MatFormFieldModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
 } from '@angular/material';
import { EvtableComponent } from './evtable/evtable.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { environment } from '../../../environments/environment';
import { AngularFirestore } from 'angularfire2/firestore';
import { QuillModule } from 'ngx-quill';
import {AdmindashComponent } from '../../admindash/admindash.component';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule,
    AngularFireModule.initializeApp(environment.fbconf, 'mahadeeni'),
    AgmCoreModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule,
    MatTableModule, MatFormFieldModule, MatPaginatorModule, MatSortModule
  ],
  declarations: [EvtableComponent, AdmindashComponent],
  exports: [QuillModule, ReactiveFormsModule,
           FormsModule, HttpClientModule,
           AgmCoreModule, MatFormFieldModule,
           EvtableComponent, AngularFireModule, AdmindashComponent],
  providers: [ServiceService, AngularFirestore]
})
export class GlobalsharedModule {}


// So far contacts module links to this

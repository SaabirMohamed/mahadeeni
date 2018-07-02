import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { EvtableDataSource } from './evtable-datasource';
import { AngularFirestore } from 'angularfire2/firestore';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'evtable',
  templateUrl: './evtable.component.html',
  styleUrls: ['./evtable.component.css'],
  animations: [
    trigger('tabelstate', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class EvtableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: EvtableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['thumb', 'name', 'description','date','status'];

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.dataSource = new EvtableDataSource(this.afs, this.paginator, this.sort);
    console.log(this.dataSource);
  }
}

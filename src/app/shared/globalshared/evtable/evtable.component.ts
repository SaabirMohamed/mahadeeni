import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { EvtableDataSource } from './evtable-datasource';

@Component({
  selector: 'evtable',
  templateUrl: './evtable.component.html',
  styleUrls: ['./evtable.component.css']
})
export class EvtableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: EvtableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['thumb', 'name', 'description','date','status'];

  ngOnInit() {
    this.dataSource = new EvtableDataSource(this.paginator, this.sort);
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { ProjectsTableDataSource } from './projects-table-datasource';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'projects-table',
  templateUrl: './projects-table.component.html',
  styleUrls: ['./projects-table.component.css']
})
export class ProjectsTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: ProjectsTableDataSource;

  constructor(private afs: AngularFirestore) {

  }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['thumb', 'name', 'description','date','status'];

  ngOnInit() {
    this.dataSource = new ProjectsTableDataSource(this.afs, this.paginator, this.sort);
    // live data source
    
  }
}

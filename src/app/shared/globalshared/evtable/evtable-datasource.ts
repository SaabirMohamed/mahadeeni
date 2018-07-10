import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';

// TODO: Replace this with your own data model type
export interface EvtableItem {
  thumb: string;
  name: string;
  description: string,
  date:string;
  status: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: EvtableItem[] = [
  {thumb: '', name: 'Radio Interview: saved Podcast', description: 'description',date: 'date', status: 'complete'},
  {thumb: '', name: 'Mass Iftaar', description: 'description',date: 'date', status: 'complete'},
  {thumb: '', name: 'Ramadaan Food Donations', description: 'description',date: 'date', status: 'complete'},
  
  
];

/**
 * Data source for the Evtable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class EvtableDataSource extends DataSource<EvtableItem> {
  data: EvtableItem[] = EXAMPLE_DATA;
  data2 = [];
  // data = this.data2;

  constructor(private afs: AngularFirestore, private paginator: MatPaginator, private sort: MatSort) {
    super();
    this.getProjects();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<EvtableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginators length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: EvtableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: EvtableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'description': return compare(a.description, b.description, isAsc);
        case 'status': return compare(a.status, b.status, isAsc);
        // case 'status': return compare(a.status, b.status, isAsc);
        case 'date': return compare(a.date, b.date, isAsc);
        case 'thumb': return compare(+a.thumb, +b.thumb, isAsc);
        default: return 0;
      }
    });
  }
  _db_path = '/events';
  // projects: Observable<any[]>;
  projects: any;
   
  projectsData = [];

  getProjects() {
    this.projects = this.afs.collection(this._db_path)
    .valueChanges();                                    
    this.projects.subscribe(data => console.log('data : ' + JSON.stringify(data)));
    
    this.projects.subscribe(data => {
       for (let i = 0; i < data.length; i++) {
        this.projectsData.push(data[i]);
        this.data2 = data;
       }
       
    }) 
    }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

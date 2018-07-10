import { Component, OnInit, ViewChild } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import {MatTableDataSource, MatFormField, MatPaginator, MatSort} from '@angular/material';


/**
 * @title Table with filtering
 */

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private svc: ServiceService) { }

  ngOnInit() {

  }


}


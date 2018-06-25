import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatFormField, MatPaginator, MatSort} from '@angular/material';
import { ServiceService } from '../../services/service.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images : Observable<Iimage[]>;
  constructor(private svc: ServiceService) { }

  ngOnInit() {
    
    this.svc.GetAllImages().subscribe(data => {
      this.images = data;
    }
    );
  }

 }

export interface Iimage {
    id:string;
    name: string;
}
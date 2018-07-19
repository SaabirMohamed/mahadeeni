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
  imagesArray = [];
  currentImage = '';

  constructor(private svc: ServiceService) { }
  showImage(id) {
    this.currentImage = id;
    console.log(this.currentImage);
    console.log(id);
    
  }

  hidePreview(){
    this.currentImage = '';
  }
  ngOnInit() {
      this.svc.getAllImages().subscribe((data: Observable<Iimage[]>) => {
      this.images = data;
      this.makeResult();
      
    }
    );
  }

  makeResult() {
    Object.keys(this.images).map((key) => {
    if (this.images[key].substr(this.images[key].length - 3) === 'png') {
      console.log(this.images[key].substr(this.images[key].length - 3));
      this.imagesArray.push(this.images[key]);
    }
    
  }
 }
}
export interface Iimage {
    id:string;
    name: string;
}

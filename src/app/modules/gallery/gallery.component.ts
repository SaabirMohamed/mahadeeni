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

  images: Observable<Iimage[]>;
  imagesArray = [];
  videoArray = [];
  currentImage = '';
  currentVideo = '';

  constructor(private svc: ServiceService) { }
  showImage(id) {
    this.currentImage = id;
    // console.log(this.currentImage);
    // console.log(id);

  }

  hidePreview() {
    this.currentImage = '';
  }

  hidePreviewVideo() {
    this.currentVideo = '';
  }
  ngOnInit() {
      this.svc.getAllImages().subscribe((data: Observable<Iimage[]>) => {
      this.images = data;
      this.makeResult();
        }
    );
  }

  showVideo(id) {
    this.currentVideo = id;
    console.log(this.currentVideo);
  }

  makeResult() {
    Object.keys(this.images).map((key) => {
    if (this.images[key].substr(this.images[key].length - 3) === 'png' ||
        this.images[key].substr(this.images[key].length - 3) === 'jpg' ||
        this.images[key].substr(this.images[key].length - 3) === 'gif' ) {
      console.log(this.images[key].substr(this.images[key].length - 3));
      this.imagesArray.push(this.images[key]);
    }
    if (this.images[key].substr(this.images[key].length - 3) === 'mp4') {
        this.videoArray.push(this.images[key]);
    }
}
 }
}
export interface Iimage {
    id: string;
    name: string;
}

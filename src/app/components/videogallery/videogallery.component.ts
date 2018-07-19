import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videogallery',
  templateUrl: './videogallery.component.html',
  styleUrls: ['./videogallery.component.css']
})
export class VideogalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  videoClick(){
    const vid = document.getElementsByClassName('video')[0];
    
    
  }
}

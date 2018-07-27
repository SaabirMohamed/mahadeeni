import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import {Ilinks} from '../dailytips/dailytips.component';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  linksPayload = [];
  currentPreview = '';
  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.getLinks();
  }

  getLinks() {
    this.afs.collection('/links').valueChanges().subscribe((data: Ilinks[]) => {
      console.log(data);
      this.linksPayload = data;

     });
  }

  showPreview(imagepath) {
    this.currentPreview = imagepath;
  }

  hidePreview() {
    this.currentPreview = '';
  }

}

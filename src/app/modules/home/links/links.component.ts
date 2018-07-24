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
  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.getLinks();
  }

  getLinks() {
    this.afs.collection('/homeLinks').valueChanges().subscribe((data: Ilinks[]) => {
      for (let b = 0; b  < data.length; b++) {
        const element = data[b];
        this.linksPayload.push(element);
      }
      console.log('payload size = ' + this.linksPayload.length);
     });
  }

}

import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-eventedit',
  templateUrl: './eventedit.component.html',
  styleUrls: ['./eventedit.component.css']
})
export class EventeditComponent implements OnInit {

  event: Observable<Ievent>[];
  currentIDs =  [];
  showDetail: boolean;
  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    const id = this.afs.collection('/events').snapshotChanges().subscribe(snap => {
      snap.map(a => {
        this.currentIDs.push(a.payload.doc.id);

      });
      this.afs.collection<Observable<Ievent>>('/events').valueChanges().subscribe(data => {
      this.event = data;
    });

    });


}



}

export interface Ievent {

  title: string;
  subtitle: string;
  content: Iparagraphs[];
  entryDate: string;
  author: string;
  path: string;
  keywords: Itag[];
}
 export interface Itag {
   name: string;

 }
export interface Iparagraphs {
  paragraph: string;
}

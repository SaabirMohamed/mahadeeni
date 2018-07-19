import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-allposts',
  templateUrl: './allposts.component.html',
  styleUrls: ['./allposts.component.css']
})
export class AllpostsComponent implements OnInit {
  @Input('id') id: string;

  posts: Observable<Ipost>[];
  currentIDs =  [];
   showDetail: boolean;
  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    const id = this.afs.collection('/posts').snapshotChanges().subscribe(snap => {
      snap.map(a => {
        this.currentIDs.push(a.payload.doc.id);

      });
      this.afs.collection<Observable<Ipost>>('/posts').valueChanges().subscribe(data => {
      this.posts = data;
    });

    });

}

openPost() {
  this.showDetail = true;
}

}

export interface Ipost {

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



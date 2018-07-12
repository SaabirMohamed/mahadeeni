import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument ,AngularFirestoreCollection } from 'angularfire2/firestore';

import { Observable } from 'rxjs';
@Component({
  selector: 'app-posts-crud',
  templateUrl: './posts-crud.component.html',
  styleUrls: ['./posts-crud.component.css']
})
export class PostsCRUDComponent implements OnInit {

  constructor(private afs: AngularFirestore) { }
  wysiwygcontent:any;
  posts: Observable<Ipost>[];
  currentIDs =  [];  
  ngOnInit() {
  
    
    
    this.afs.collection<Observable<Ipost>>('/posts').valueChanges().subscribe(data => {
      this.posts = data;
    });

    const id = this.afs.collection('/posts').snapshotChanges().subscribe(snap => {
      snap.map(a => this.currentIDs.push(a.payload.doc.id))
    });

  }

  updatePost(key: any, payload: Ipost) {
    console.log(payload);
    this.afs.doc('posts/'+key).update(payload).then(cb => {
      console.log(cb);
    }
    ).catch( error => console.log(error));
  }

  deletePost() {

  }

  addNewPost() {

  }

}

export interface Ipost {

  title: string;
  subtitle: string;
  content: Iparagraphs[];
  entryDate: string;
  author: string;
  path: string;
}

export interface Iparagraphs {
  paragraph: string;
}

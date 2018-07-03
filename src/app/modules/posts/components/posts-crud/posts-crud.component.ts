import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-posts-crud',
  templateUrl: './posts-crud.component.html',
  styleUrls: ['./posts-crud.component.css']
})
export class PostsCRUDComponent implements OnInit {

  constructor(private afs: AngularFirestore) { }

  posts: Observable<Ipost>[];

  ngOnInit() {
    this.afs.collection<Observable<Ipost>>('/posts').valueChanges()
    .subscribe(data => {
      console.log(data);
      this.posts = data;
    });
  }

}

export interface Ipost {
  title: string;
  subtile: string;
  content: Iparagraphs[];
}

export interface Iparagraphs {
  paragraph: string;
}

import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-postsdetail',
  templateUrl: './postsdetail.component.html',
  styleUrls: ['./postsdetail.component.css']
})
export class PostsdetailComponent implements OnInit {

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



}

export interface Ipost {

  title: string;
  subtitle: string;
  content: Iparagraphs[];
  entryDate: string;
  author: string;
  path: string;
  keywords : Itag[]
}
 export interface Itag {
   name: string;

 }
export interface Iparagraphs {
  paragraph: string;
}



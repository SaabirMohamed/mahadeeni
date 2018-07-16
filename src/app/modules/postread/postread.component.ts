import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-postread',
  templateUrl: './postread.component.html',
  styleUrls: ['./postread.component.css']
})
export class PostreadComponent implements OnInit {
  post: Observable<Ipost>;
  currentIDs =  []; 
  showDetail: boolean;
  id: number;
  sub: any;
  constructor(private afs: AngularFirestore, private router: ActivatedRoute) { }

  ngOnInit() {

           this.router.params.subscribe(params => {
           this.id = params['id']; // (+) converts string 'id' to a number
           console.log(this.id);
           this.post = this.afs.doc('posts/'+this.id).valueChanges();
}

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



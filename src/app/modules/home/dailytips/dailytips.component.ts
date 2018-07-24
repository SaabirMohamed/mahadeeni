import { Component, OnInit, IterableDiffers } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
@Component({
  selector: 'app-dailytips',
  templateUrl: './dailytips.component.html',
  styleUrls: ['./dailytips.component.css']
})
export class DailytipsComponent implements OnInit {
  tipPayload = [];
  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.getTips();

  }

  loadTip(action) {
    console.log(action);
  }

  getTips() {
    this.afs.collection('/dailytips').valueChanges().subscribe((data: Itips[]) => {
      for (let b = 0; b  < data.length; b++) {
        const d = data[b];
        this.tipPayload.push(d);
        console.log(this.tipPayload);

      }

     });
  }



}

export interface Itips {
  title: string;
  image: string;
  tiptext: string;
  action: string;
}
export interface Ilinks {
  title: string;
  image: string;
  subtitle: string;
  description: string;
}



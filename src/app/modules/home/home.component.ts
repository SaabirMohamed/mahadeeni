import { Component, OnInit, OnDestroy } from '@angular/core';

import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
// import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  _api_path = 'https://mahadeeni.co.za/assets/getimages/php';
  images: any;

  _db_path = '/banner';
  _tips_path = "/dailytips"
  highlightedContentResult: Observable<any[]>;
  imageNames = [];
  bannerimages = [];
  bannerTitles = [];
  bannerTitle = '';
  bannerAction = '';
  bannerActions = [];
// change this to look in folder..will check on server from php or firebase..pointer
  bannerImagesPath = '../../../assets/';
  // bannerimages = [this.bannerImagesPath + 'meetupflyerbanner.png',
  //                 this.bannerImagesPath + 'iftaarbanner.jpg',
  //                 this.bannerImagesPath + 'radiointerview.png',
  //                 this.bannerImagesPath + 'iouprograms.png'];
  bannerimage: string;
  interval: any;
  lastnum = 0;
  bannerloading: boolean;
  constructor(private afs: AngularFirestore) {
      this.bannerloading = true;
    }
  ngOnInit() {
    this.highlightedContent();
    this.bannerimage = this.bannerimages[0];
    this.bannerTitle = this.bannerTitles[0];
    this.bannerAction = this.bannerAction[0];
      this.interval = setInterval(() => {
        if (this.bannerimage === this.bannerimages[this.lastnum] && this.lastnum < this.bannerimages.length) {
        this.bannerimage = this.bannerimages[this.lastnum + 1];
        this.bannerTitle = this.bannerTitles[this.lastnum + 1];
        this.bannerAction = this.bannerActions[this.lastnum + 1];
        this.lastnum++;
        if (this.lastnum === this.bannerimages.length) {this.lastnum = 0; this.bannerimage = this.bannerimages[this.lastnum]; }

              } else {
                 this.bannerTitle =  this.bannerTitles[0];
                 this.bannerAction =  this.bannerActions[0];
                this.bannerimage = this.bannerimages[0]; this.bannerimage = this.bannerimages[0]; }
      }, 5000);

  }

  ngOnDestroy(): void {
    clearInterval(this.interval);

  }

  highlightedContent() {
    this.bannerloading = true;
    this.highlightedContentResult = this.afs.collection(this._db_path)
    .valueChanges();
    this.highlightedContentResult.subscribe(data => console.log('data : ' + JSON.stringify(data)));
    this.highlightedContentResult.subscribe(data => {
       for (let i = 0; i < data.length; i++) {
        this.bannerimages.push(this.bannerImagesPath  + data[i].image);
        this.bannerTitles.push(data[i].description);
       }
       this.bannerloading = false;
    });
    }
  }


  export interface Ibanner {
    image: string;
    description: string;
    action: string;
  }




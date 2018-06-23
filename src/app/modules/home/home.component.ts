import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pageTitle = 'Welcome to Mahadeeni';
  pageSubTitle = 'Building community, Uniting the Ummah toward education';
  pageImageUrl = '../assets/icon-256x256.png';
  pageTitleImageUrl = '../assets/pageImage.png';
  bannerimages = ['../../../assets/meetupflyerbanner.png',
                  '../../../assets/iftaarbanner.jpg',
                  '../../../assets/radiointerview.png',
                  '../../../assets/iouprograms.png'];
  bannerimage: string;
  interval: any;
  lastnum = 0;
  constructor() { this.bannerimage = this.bannerimages[0]; }
  ngOnInit() {

      this.interval = setInterval(() => {
        if (this.bannerimage === this.bannerimages[this.lastnum] && this.lastnum < this.bannerimages.length) {
        this.bannerimage = this.bannerimages[this.lastnum + 1];
        this.lastnum++;
        if (this.lastnum === this.bannerimages.length) {this.lastnum = 0; this.bannerimage = this.bannerimages[this.lastnum]; }
        console.log(this.bannerimage);
              } else { this.bannerimage = this.bannerimages[0]; this.bannerimage = this.bannerimages[0]; }
      }, 5000);
  }
}

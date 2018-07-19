import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  showHome: boolean;
  showAbout: boolean;
  showEvents: boolean;
  showePosts: Boolean;
  showContacts: Boolean;
  showCounselling: boolean;
  showProjects: boolean;
  items = [];
  constructor() { }

  ngOnInit() {
    this.items.push(
      this.showAbout,
      this.showContacts,
      this.showePosts,
      this.showEvents,
      this.showHome,
    this.showProjects,
  this.showCounselling);
  this.hideAll();
  }

  gotoSection(target) {
    console.log(target);
  }
  hideAll() {
    this.items.forEach(element => {
      element = false;
    });

  }
  toggleSection(target) {
    console.log(target);
    switch (target) {
      case 'home':
      console.log(target);
      if (confirm('open : home ?')) {
        this.hideAll();
        this.showHome = true;
      } else {
        this.hideAll();
      }
        break;
      case 'contacts':
      if (confirm('open : contacts ?')) {
        this.hideAll();
        this.showContacts = true;
      } else {
        this.hideAll();
      }
        break;
      case 'about':
      if (confirm('navigate to : about ?')) {
        this.hideAll();
        this.showAbout = true;
      } else {
        this.hideAll();
      }
        break;
      case 'projects':
        if (confirm('navigate to : projects')) {
          console.log('confirmed');
        } else {
          console.log('cancelled');
        }
        break;
      case 'events':
      if (confirm('navigate to : events')) {
        console.log('confirmed');
      } else {
        console.log('cancelled');
      }
        break;
      case 'posts':
      if (confirm('navigate to : posts')) {
        console.log('confirmed');
      } else {
        console.log('cancelled');
      }
        break;
      default:
        confirm('navigate to : Sorry, that color is not in the system yet!');
    }
  }

}

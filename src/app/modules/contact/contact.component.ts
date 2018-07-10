import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../services/service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title = 'Mahadeeni GEO Location';
  lat = 51.678418;
  lng = 7.809007;

  loader: boolean;
  result: Observable<any>;
  constructor(private service: ServiceService) { }

  ngOnInit() {
  }


  onSubmit(n, num, em, s, m) {
    this.loader = true;
    // console.log('payload: ' + n + ' : ' + num + ' : ' + em + ' : ' + s + ' : ' + m);
    this.service.createContactEnquiry(n, num, em, s, m)
    .subscribe(result => {
        this.result  = result;
        this.loader = false;

      });
    }
  }





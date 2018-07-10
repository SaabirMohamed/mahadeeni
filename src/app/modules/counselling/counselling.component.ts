import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-counselling',
  templateUrl: './counselling.component.html',
  styleUrls: ['./counselling.component.css']
})
export class CounsellingComponent implements OnInit {

  loader: boolean;
  result: any;
  complete: boolean;

  pload = {
    fname: '',
    lname: '',
    em: '',
    tel: '',
    bdate: '',
    age: '',
    adate: '',
    attendees: ''


  };

  constructor(private service: ServiceService) { }

  ngOnInit() {
  }

  onSubmit(fname) {
    console.log('FNAME: ' + fname);
      // this.result = this.service.createAppointment(fname,lname,em,tel,bdate,age,adate,attendees)
      // .subscribe(result => {
      //   this.result = result;
      //   this.loader = false;
      //   this.complete = true;
      // })

      }

    }


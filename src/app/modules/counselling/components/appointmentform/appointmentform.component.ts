import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../../services/service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-appointmentform',
  templateUrl: './appointmentform.component.html',
  styleUrls: ['./appointmentform.component.css']
})
export class AppointmentformComponent implements OnInit {
  loader: boolean;
  result: Observable<any>
  constructor(private service: ServiceService) { }

  ngOnInit() {
  }
  onSubmit(n,num,em,s,m) {
    this.loader = true;
    // console.log('payload: ' + n + ' : ' + num + ' : ' + em + ' : ' + s + ' : ' + m);
    this.service.createEnquiry(n,num,em,s,m)
    .subscribe(result =>
      { 
        this.result  = result;
        this.loader = false;

      });
    

    }

}

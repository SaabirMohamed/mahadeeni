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
  result: Observable<any>;
  alreadySubmitted: boolean;
  constructor(private service: ServiceService) { }
  lastSubmitDate: string;
  ngOnInit() {
    if (localStorage.getItem('anonymous')) {
      this.alreadySubmitted = true;
      this.lastSubmitDate = localStorage.getItem('anonymous');
    } else {
      this.alreadySubmitted = false;
    }
  }
  onSubmit(n, num, em, adate) {
    this.loader = true;
    // console.log('payload: ' + n + ' : ' + num + ' : ' + em + ' : ' + s + ' : ' + m);
    this.service.createAppointment(n, num, em, adate)
    .subscribe(result => {
        this.result  = result;
        console.log(this.result);
        this.loader = false;
       this.alreadySubmitted = true;
      });
    }

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ServiceService } from '../../../../services/service.service';

@Component({
  selector: 'app-anonform',
  templateUrl: './anonform.component.html',
  styleUrls: ['./anonform.component.css']
})
export class AnonformComponent implements OnInit {
  loader: boolean;
  result: Observable<any>;
  alreadySubmitted: boolean;
  lastSubmitDate = '';
  constructor(private service: ServiceService) { }

  ngOnInit() {
    if (localStorage.getItem('anonymous')) {
      this.alreadySubmitted = true;
      this.lastSubmitDate = localStorage.getItem('anonymous');
    } else {
      this.alreadySubmitted = false;
    }
  }

  public onSubmit(n, num, em, m) {
    this.loader = true;
    // console.log('payload: ' + n + ' : ' + num + ' : ' + em + ' : ' + s + ' : ' + m);
    this.service.createAppointment(n, num, em,  m)
    .subscribe(result => {
        this.result  = result;
        this.loader = false;
        localStorage.setItem('anonymous', Date.now().toString());
        this.alreadySubmitted = true;

      });

    }
}

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

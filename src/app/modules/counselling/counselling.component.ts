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


  }

  constructor(private service: ServiceService) { }

  ngOnInit() {
  }

  onSubmit() {
      
    console.log(this.pload.fname,this.pload.lname,this.pload.em,this.pload.tel,this.pload.bdate,this.pload.age,this.pload.adate,this.pload.attendees);
      this.loader = true;
      
      this.result = this.service.createAppointment(this.pload);
      if(this.result !== '') {
        this.complete = true;
        this.loader = false;

      }
      

    } 
}

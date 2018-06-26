import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ipost } from './posts.model';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 
  images: Observable<any>;
  result: Observable<any>;
  appointmentresult: Observable<any>;
  getresult: Observable<Iimage[]>;
  api = 'https://www.mahadeeni.co.za/assets/api.php';
  api_apipointment = 'https://www.mahadeeni.co.za/assets/api_appointment.php';
  api_apinon = 'https://www.mahadeeni.co.za/assets/api_apinon.php';
  myevent: Ievent[];
  constructor(private http: HttpClient) { }

  // returns an observble of the response from the server.
  createEnquiry(n,num,em,s,m): Observable<any> {
    const pld = '?name='+n+'&num='+num+'&em='+em+'&subject='+s+'&message='+m;
    const headers = new HttpHeaders().append('Content-Type','application/x-www-form-urlencoded');
    headers.append('Content-Type','application/json')
    const data = {
      name:n,
      num:num,
      em:em,
      message:m,
      subject:s
    } 
    this.result = this.http.post(this.api+pld, data, { headers });
    return this.result;
  }

  getEvents() {
      return {
        name:'test',
        desc:'test',
        eventdate:'test',
        eventenddate:'test',
      }
    }

  GetAllImages() {
    
     return this.http.get<Observable<Iimage[]>>('https://mahadeeni.co.za/assets/images.php');
        
  }


  createAppointment(pldtxt): Observable<any> {
    // const pld = '?name='+n+'&num='+num+'&em='+em+'&subject='+s+'&message='+m;
    console.log('?fname=' + pldtxt.fname + '&lname=' + pldtxt.lname + '&em=' + pldtxt.em + '&tel=' + pldtxt.tel + '&bdate=' + pldtxt.adate + '&age=' + pldtxt.age + '&adate=' + pldtxt.adate + '&attendees=' + pldtxt.attendees);
    const pld = '?fname=' + pldtxt.fname + '&lname=' + pldtxt.lname + '&em=' + pldtxt.em + '&tel=' + pldtxt.tel + '&bdate=' + pldtxt.adate + '&age=' + pldtxt.age + '&adate=' + pldtxt.adate + '&attendees=' + pldtxt.attendees;
    const headers = new HttpHeaders().append('Content-Type','application/x-www-form-urlencoded');
    headers.append('Content-Type','application/json')
    const data = {
      fname:pldtxt.fname,
      lname:pldtxt.lname,
      em:pldtxt.em,
      tel:pldtxt.tel,
      bdate:pldtxt.bdate,
      age:pldtxt.age,
      adate:pldtxt.adate,
      attendees:pldtxt.attendees,
    } 
    return this.http.post(this.api_apipointment+pld, data, { headers });
    
  }



  }

//   $fname = $_GET["name"];
// $lname = $_GET["num"];
// $em = $_GET["em"];
// $tel = $_GET["tel"];
// $bdate = $_GET["bdate"];
// $age = $_GET["age"];
// $adate = $_GET["adate"];
// $attendees = $_GET["attendees"];

export interface Iimage {
    id:string;
    name: string;
}
export interface Ievent {
    name: string;
    desc: string;
    eventdate: string;
    eventenddate: string
}























// submitEnquiry(n,num,em,s,m) {
//   if(n !== '' && num !== '' && em !== '' && s !== '' && m){
//     const payload = '?name='+n+'&num='+num+'&em='+em+'&subject='+s+'&message='+m;
//     this.http.post(this.api,{
//       name:n,
//       num:num,
//       em:em,
//       message:m,
//       subject:s
//     },)
//     .subscribe((data) => {
//       this.result = data;
//       console.log(data);
//     });
//   }
  
// }
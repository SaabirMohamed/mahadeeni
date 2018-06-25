import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ipost } from './posts.model';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 
  result: Observable<any>;
  api = 'https://www.mahadeeni.co.za/assets/api.php';
 
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
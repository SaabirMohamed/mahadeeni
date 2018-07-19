import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ipost } from './posts.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { toObservable } from '@angular/forms/src/validators';


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
  postsUrl = '/posts';
  posts: Observable<any>;
  eventsUrl = '/events';
  events: Observable<any>;

  constructor(private afs: AngularFirestore , private http: HttpClient) { }

  // returns an observble of the response from the server. (used by /counselling anon form)
  // Anonymous
  createEnquiry(n, num, em, m): Observable<any> {
    const pld = '?name=' + n + '&num=' + num + '&em=' + em + '&message=' + m;
    const headers = new HttpHeaders().append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Content-Type', 'application/json');
    const data = {
      name: n,
      num: num,
      em: em,
      message: m
    };
    this.result = this.http.post(this.api_apinon + pld, data, { headers });
    return this.result;
  }
  // returns an observble of the response from the server. (used by /contact)
  createContactEnquiry(n, num, em, s, m): Observable<any> {
    const pld = '?name=' + n + '&num=' + num + '&em=' + em + '&message=' + m;
    const headers = new HttpHeaders().append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Content-Type', 'application/json');
    const data = {
      name: n,
      num: num,
      em: em,
      message: m,
      s: s,
    };
    this.result = this.http.post(this.api + pld, data, { headers });
    return this.result;
  }


  createAppointment(n, num, em, m): Observable<any> {


    const headers = new HttpHeaders().append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Content-Type', 'application/json');
    const data = {
      name: n,
      em: em,
      num: num,
      m: m
    };
    // console.log(data);
    const pld = '?fname=' + n + '&em=' + em + '&tel=' + num;
    return this.http.post(this.api_apipointment + pld, data, { headers });

  }


  // CRUD posts

  // creatPosts() {
  //   this.afs.collection(this.postsUrl).add({

  //   }).then(data => console.log('added: ', data))
  //   .catch(err => console.log(err));
  // }

  // getPosts() {
  //   this.afs.collection(this.postsUrl).valueChanges()
  //   .subscribe(data => {
  //     this.posts  = toObservable(data);
  //   });
  // }

  // deletePost() {}

  // updatePost() {}

  // // CRUD events
  // creatEvent() {
  //   this.afs.collection(this.eventsUrl).add({

  //   }).then(data => console.log('added: ', data))
  //   .catch(err => console.log(err));
  // }

  // getEvents() {
  //   this.afs.collection(this.eventsUrl).valueChanges()
  //   .subscribe(data => {
  //     this.events  = toObservable(data);
  //   });
  // }

  // deleteEvent() {}

  // updateEvent() {}


  getAllImages(){
    return this.http.get('https://www.mahadeeni.co.za/assets/images.php');
  }

}





// some vars on server
// $fname = $_GET["name"];
// $lname = $_GET["num"];
// $em = $_GET["em"];
// $tel = $_GET["tel"];
// $bdate = $_GET["bdate"];
// $age = $_GET["age"];
// $adate = $_GET["adate"];
// $attendees = $_GET["attendees"];

export interface Iimage {
    id: string;
    name: string;
}
export interface Ievent {
    name: string;
    desc: string;
    eventdate: string;
    eventenddate: string;
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

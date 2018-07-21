import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../../../../services/service.service';

import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-homeedit',
  templateUrl: './homeedit.component.html',
  styleUrls: ['./homeedit.component.css']
})
export class HomeeditComponent implements OnInit {

  homeForm: FormGroup;
  bannerForm: FormGroup;
  submitted = false;
  loading: boolean;
  banners: any;
  bannerPayload = [];
  bannerIds = [];


  constructor(private afs: AngularFirestore, private fb: FormBuilder, private svc: ServiceService) { }

  ngOnInit() {
    this.getBanners();
    this.homeForm = this.fb.group({
      title: ['', Validators.required],
      desc: ['', Validators.required],
      image: ['', Validators.required],
      link: ['', Validators.required],
      
           
      });
    this.bannerForm = this.fb.group({
      bannerTitle: ['', Validators.required],
      bannerDesc: ['', Validators.required],
      bannerImage: ['', Validators.required],
      link: ['', Validators.required],
      
           
      });
  }
   // convenience getter for easy access to form fields
   get f() { return this.homeForm.controls; }
 
   onSubmit() {
       this.submitted = true;

       // stop here if form is invalid
       if (this.homeForm.invalid) {
           return;
       }

       alert('SUCCESS!! :-)')
   }

   getBanners() {
    this.afs.collection('banner').snapshotChanges().subscribe( data => {
      for (let i = 0; i < data.length; i++) {
        this.bannerIds.push(data[i].payload.doc.id);         
      }
      console.log(this.bannerIds);
    }); 
    this.afs.collection('banner').valueChanges().subscribe(data => {
       data.forEach(element => {
         this.bannerPayload.push({
           image: element.image,
           description: element.description,
           action: element.action
         });
         
       });
     });
     
   }

   removeBanner(doc, index) {
     console.log(index);
     this.bannerIds.splice(index,1,this.bannerIds[index]);
     this.bannerPayload.splice(index,1,this.bannerPayload[index]);
      this.afs.collection('banner').doc(doc).delete();
      

   }

}

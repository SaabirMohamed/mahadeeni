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
  bannerData: { image : '', description: '', action: ''}[];
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
   get b() { return this.bannerForm.controls; }
 
   onSubmit() {
       this.submitted = true;

       // stop here if form is invalid
       if (this.homeForm.invalid) {
           return;
       }

       alert('SUCCESS!! :-)')
   }

   getBanners() {
    this.bannerIds = [];
    this.bannerPayload = [];
    this.afs.collection('banner').snapshotChanges().subscribe( data => {
      for (let i = 0; i < data.length; i++) {
        this.bannerIds.push(data[i].payload.doc.id);         
      }
      console.log(this.bannerIds);
    }); 
    this.afs.collection('banner').valueChanges().subscribe(data => {
      for (let b = 0; b  < data.length; b++) {
        const element = data[b];
        console.log('ELEMENT VC' + element);
        
      } 
      data.forEach((element: Ibanner) => {
         this.bannerPayload.push({
           image: element.image,
           description: element.description,
           action: element.action
         });
         
       });
     });
     
   }

   addBanner() {
      const bannerTitle = this.bannerForm.get('bannerTitle').value;
      const  bannerImage = this.bannerForm.get('bannerImage').value;
      const  bannerDesc = this.bannerForm.get('bannerDesc').value;
      const  bannerLink = this.bannerForm.get('link').value;
      if (bannerTitle && bannerDesc && bannerLink && bannerImage) {
        this.afs.collection('banner').add({
          title: bannerTitle,
          image: bannerImage,
          description: bannerDesc,
          action: bannerLink,
        });
      } else {
        return;
      }
      
   }

   removeBanner(doc, index) {
     
      this.afs.collection('banner').doc(doc).delete();
      

   }

}

export interface Ibanner {
  image:string;
  description: string;
  action: string;
}

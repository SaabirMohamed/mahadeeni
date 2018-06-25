import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class SendmailService {

  constructor(private sendmailer: SendmailService) { }

  sendmailEnquiry(payload: string) {
      
  }

}

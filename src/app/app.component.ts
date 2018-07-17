import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  base_path = '../assets/vidbg/';
  currentbg = 'home';
  bgextension = '.mp4';
  bg = this.base_path + this.currentbg + this.bgextension;

  bgChanger(e) {
    this.bg = this.base_path + e + this.bgextension;
  }

}

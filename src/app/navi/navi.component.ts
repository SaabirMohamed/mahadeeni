import { Component, Output, EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent {
  @Output() bgchange: EventEmitter<any> = new EventEmitter();
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  clicker(bgname) {
    // console.log('bg ' + bgname + '.mp4');
      this.bgchange.emit(bgname);
  }

  constructor(private breakpointObserver: BreakpointObserver) {}
  }

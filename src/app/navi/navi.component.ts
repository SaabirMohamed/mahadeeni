import { Component, Output, EventEmitter, HostListener, ElementRef , ViewChild, ViewContainerRef} from '@angular/core';
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
  @ViewChild('navsection', {read: ViewContainerRef}) navsection: ViewContainerRef;
  isScrolling: boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  clicker(bgname) {
    // console.log('bg ' + bgname + '.mp4');
      this.bgchange.emit(bgname);
  }

  constructor(private elem: ElementRef, private breakpointObserver: BreakpointObserver) {}
  @HostListener('window:scroll', ['$event'])
  onScroll($event: Event): void {
    console.log('On Scroll');
    // Logic To Check whether we are bottom of the page
    // if ((window.innerHeight + window.scrollY) <= document.body.offsetHeight) {
    //   console.log('REACHED TOP' + window.scrollY);
    //   // Write logic here for loading new content.
    // }
    if (window.scrollY <= 0 ) {
      // toggle class
      // console.log(window.scrollY);
      this.isScrolling = false;
      this.elem.nativeElement.setAttribute('style', ' font-size: 1rem');
    } else {
      this.isScrolling  = true;
      // console.log(window.scrollY);
      this.elem.nativeElement.setAttribute('style', 'box-shadow: 0px 10px 13px #000 !important; font-size: 1.3rem');
    }
  }



  }

import { OnInit, Component, Output, EventEmitter, HostListener, ElementRef , ViewChild, ViewContainerRef} from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
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
      this.resetScroll();
  }
  mobileClickClose() {
     const menu = document.getElementById('menu');
     menu.setAttribute('style', 'transform: translateX(-300px)');
  }

  mobileClickOpen() {
    const menu = document.getElementById('menu');
     menu.setAttribute('style', 'transform: translateX(0)');
  }

  constructor(private elem: ElementRef, private breakpointObserver: BreakpointObserver) {
    this.bgchange.emit('home');
  }
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
      this.elem.nativeElement
      .setAttribute('style', 'box-shadow: 0px 10px 13px #000 !important; font-size: 1rem; transform: translateY(-10px)');
    }
  }

  resetScroll() {
    window.scrollTo(0, 0);
  }

   ngOnInit() {
    this.mobileClickClose();
  }

  }


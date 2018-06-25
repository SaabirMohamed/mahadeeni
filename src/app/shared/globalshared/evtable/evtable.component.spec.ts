
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvtableComponent } from './evtable.component';

describe('EvtableComponent', () => {
  let component: EvtableComponent;
  let fixture: ComponentFixture<EvtableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EvtableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

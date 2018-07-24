import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailytipsComponent } from './dailytips.component';

describe('DailytipsComponent', () => {
  let component: DailytipsComponent;
  let fixture: ComponentFixture<DailytipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailytipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailytipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

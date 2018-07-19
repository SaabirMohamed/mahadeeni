import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeeditComponent } from './homeedit.component';

describe('HomeeditComponent', () => {
  let component: HomeeditComponent;
  let fixture: ComponentFixture<HomeeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactseditComponent } from './contactsedit.component';

describe('ContactseditComponent', () => {
  let component: ContactseditComponent;
  let fixture: ComponentFixture<ContactseditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactseditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

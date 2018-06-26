import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnonformComponent } from './anonform.component';

describe('AnonformComponent', () => {
  let component: AnonformComponent;
  let fixture: ComponentFixture<AnonformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnonformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnonformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectseditComponent } from './projectsedit.component';

describe('ProjectseditComponent', () => {
  let component: ProjectseditComponent;
  let fixture: ComponentFixture<ProjectseditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectseditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

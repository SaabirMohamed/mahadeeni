import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostseditComponent } from './postsedit.component';

describe('PostseditComponent', () => {
  let component: PostseditComponent;
  let fixture: ComponentFixture<PostseditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostseditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

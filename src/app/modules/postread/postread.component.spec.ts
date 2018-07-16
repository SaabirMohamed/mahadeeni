import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostreadComponent } from './postread.component';

describe('PostreadComponent', () => {
  let component: PostreadComponent;
  let fixture: ComponentFixture<PostreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

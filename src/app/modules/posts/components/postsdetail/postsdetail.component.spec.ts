import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsdetailComponent } from './postsdetail.component';

describe('PostsdetailComponent', () => {
  let component: PostsdetailComponent;
  let fixture: ComponentFixture<PostsdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

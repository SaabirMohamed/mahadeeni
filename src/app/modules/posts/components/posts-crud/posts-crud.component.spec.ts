import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsCRUDComponent } from './posts-crud.component';

describe('PostsCRUDComponent', () => {
  let component: PostsCRUDComponent;
  let fixture: ComponentFixture<PostsCRUDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsCRUDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

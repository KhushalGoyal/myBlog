import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBlogContentsComponent } from './add-blog-contents.component';

describe('AddBlogContentsComponent', () => {
  let component: AddBlogContentsComponent;
  let fixture: ComponentFixture<AddBlogContentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBlogContentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBlogContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

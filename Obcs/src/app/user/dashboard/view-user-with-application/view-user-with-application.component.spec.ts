import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserWithApplicationComponent } from './view-user-with-application.component';

describe('ViewUserWithApplicationComponent', () => {
  let component: ViewUserWithApplicationComponent;
  let fixture: ComponentFixture<ViewUserWithApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUserWithApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserWithApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

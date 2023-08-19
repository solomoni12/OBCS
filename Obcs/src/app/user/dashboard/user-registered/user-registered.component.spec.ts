import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegisteredComponent } from './user-registered.component';

describe('UserRegisteredComponent', () => {
  let component: UserRegisteredComponent;
  let fixture: ComponentFixture<UserRegisteredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegisteredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegisteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

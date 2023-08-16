import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSidebarComponent } from './login-sidebar.component';

describe('LoginSidebarComponent', () => {
  let component: LoginSidebarComponent;
  let fixture: ComponentFixture<LoginSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

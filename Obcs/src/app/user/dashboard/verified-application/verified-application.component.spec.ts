import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiedApplicationComponent } from './verified-application.component';

describe('VerifiedApplicationComponent', () => {
  let component: VerifiedApplicationComponent;
  let fixture: ComponentFixture<VerifiedApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifiedApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifiedApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

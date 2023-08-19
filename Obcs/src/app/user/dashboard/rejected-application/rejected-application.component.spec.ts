import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedApplicationComponent } from './rejected-application.component';

describe('RejectedApplicationComponent', () => {
  let component: RejectedApplicationComponent;
  let fixture: ComponentFixture<RejectedApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectedApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

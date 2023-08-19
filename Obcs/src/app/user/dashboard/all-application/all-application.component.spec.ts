import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllApplicationComponent } from './all-application.component';

describe('AllApplicationComponent', () => {
  let component: AllApplicationComponent;
  let fixture: ComponentFixture<AllApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllApplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

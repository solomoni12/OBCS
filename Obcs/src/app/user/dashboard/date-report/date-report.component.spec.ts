import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateReportComponent } from './date-report.component';

describe('DateReportComponent', () => {
  let component: DateReportComponent;
  let fixture: ComponentFixture<DateReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNewApplicationDetailComponent } from './view-new-application-detail.component';

describe('ViewNewApplicationDetailComponent', () => {
  let component: ViewNewApplicationDetailComponent;
  let fixture: ComponentFixture<ViewNewApplicationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewNewApplicationDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNewApplicationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

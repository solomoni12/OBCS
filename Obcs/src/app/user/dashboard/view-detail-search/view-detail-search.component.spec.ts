import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailSearchComponent } from './view-detail-search.component';

describe('ViewDetailSearchComponent', () => {
  let component: ViewDetailSearchComponent;
  let fixture: ComponentFixture<ViewDetailSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDetailSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDetailSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDetailUserComponent } from './view-detail-user.component';

describe('ViewDetailUserComponent', () => {
  let component: ViewDetailUserComponent;
  let fixture: ComponentFixture<ViewDetailUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDetailUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDetailUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNewApplicationPopupComponent } from './update-new-application-popup.component';

describe('UpdateNewApplicationPopupComponent', () => {
  let component: UpdateNewApplicationPopupComponent;
  let fixture: ComponentFixture<UpdateNewApplicationPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateNewApplicationPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNewApplicationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

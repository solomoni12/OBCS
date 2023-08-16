import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyCerticateComponent } from './verify-certicate.component';

describe('VerifyCerticateComponent', () => {
  let component: VerifyCerticateComponent;
  let fixture: ComponentFixture<VerifyCerticateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyCerticateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyCerticateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

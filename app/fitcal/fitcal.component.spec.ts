import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitcalComponent } from './fitcal.component';

describe('FitcalComponent', () => {
  let component: FitcalComponent;
  let fixture: ComponentFixture<FitcalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitcalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitcalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

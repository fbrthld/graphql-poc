import { ComponentFixture, TestBed } from '@angular/core/testing';

import { USDRateComponent } from './usdrate.component';

describe('USDRateComponent', () => {
  let component: USDRateComponent;
  let fixture: ComponentFixture<USDRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ USDRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(USDRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

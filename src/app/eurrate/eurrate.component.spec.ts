import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EURRateComponent } from './eurrate.component';

describe('EURRateComponent', () => {
  let component: EURRateComponent;
  let fixture: ComponentFixture<EURRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EURRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EURRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

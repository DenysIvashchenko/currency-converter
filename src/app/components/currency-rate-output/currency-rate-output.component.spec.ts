import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyRateOutputComponent } from './currency-rate-output.component';

describe('CurrencyRateOutputComponent', () => {
  let component: CurrencyRateOutputComponent;
  let fixture: ComponentFixture<CurrencyRateOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyRateOutputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyRateOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseCouponsComponent } from './purchase-coupons.component';

describe('PurchaseCouponsComponent', () => {
  let component: PurchaseCouponsComponent;
  let fixture: ComponentFixture<PurchaseCouponsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseCouponsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

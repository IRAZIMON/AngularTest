import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseCouponDetailsComponent } from './purchase-coupon-details.component';

describe('PurchaseCouponDetailsComponent', () => {
  let component: PurchaseCouponDetailsComponent;
  let fixture: ComponentFixture<PurchaseCouponDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseCouponDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseCouponDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

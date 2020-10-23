import { TestBed } from '@angular/core/testing';

import { CustomerProtectorService } from './customer-protector.service';

describe('CustomerProtectorService', () => {
  let service: CustomerProtectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerProtectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

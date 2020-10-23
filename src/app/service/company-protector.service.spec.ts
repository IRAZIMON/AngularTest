import { TestBed } from '@angular/core/testing';

import { CompanyProtectorService } from './company-protector.service';

describe('CompanyProtectorService', () => {
  let service: CompanyProtectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyProtectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

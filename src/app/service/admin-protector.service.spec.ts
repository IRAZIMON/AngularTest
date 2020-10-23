import { TestBed } from '@angular/core/testing';

import { AdminProtectorService } from './admin-protector.service';

describe('AdminProtectorService', () => {
  let service: AdminProtectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminProtectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

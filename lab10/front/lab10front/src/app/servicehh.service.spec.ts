import { TestBed } from '@angular/core/testing';

import { ServicehhService } from './servicehh.service';

describe('ServicehhService', () => {
  let service: ServicehhService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicehhService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { RrwebService } from './rrweb.service';

describe('RrwebService', () => {
  let service: RrwebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RrwebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

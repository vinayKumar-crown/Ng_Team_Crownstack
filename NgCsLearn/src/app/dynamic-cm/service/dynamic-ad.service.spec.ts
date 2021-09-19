import { TestBed } from '@angular/core/testing';

import { DynamicAdService } from './dynamic-ad.service';

describe('DynamicAdService', () => {
  let service: DynamicAdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamicAdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

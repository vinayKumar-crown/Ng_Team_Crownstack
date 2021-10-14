import { TestBed } from '@angular/core/testing';

import { ConditionalLoadService } from './conditional-load.service';

describe('ConditionalLoadService', () => {
  let service: ConditionalLoadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConditionalLoadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

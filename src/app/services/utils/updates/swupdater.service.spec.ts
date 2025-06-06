import { TestBed } from '@angular/core/testing';

import { SwupdaterService } from './swupdater.service';

describe('SwupdaterService', () => {
  let service: SwupdaterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwupdaterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

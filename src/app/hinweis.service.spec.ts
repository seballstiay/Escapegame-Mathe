import { TestBed } from '@angular/core/testing';

import { HinweisService } from './hinweis.service';

describe('HinweisService', () => {
  let service: HinweisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HinweisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DarkModeServiceService } from './dark-mode-service.service';

describe('DarkModeServiceService', () => {
  let service: DarkModeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DarkModeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

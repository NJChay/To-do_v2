import { TestBed } from '@angular/core/testing';

import { LoadmanageService } from './loadmanage.service';

describe('LoadmanageService', () => {
  let service: LoadmanageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadmanageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

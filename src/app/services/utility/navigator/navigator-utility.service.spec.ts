import { TestBed } from '@angular/core/testing';

import { NavigatorUtilityService } from './navigator-utility.service';

describe('NavigatorUtilityService', () => {
  let service: NavigatorUtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigatorUtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

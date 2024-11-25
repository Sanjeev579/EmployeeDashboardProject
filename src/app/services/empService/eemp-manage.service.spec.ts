import { TestBed } from '@angular/core/testing';

import { EempManageService } from './eemp-manage.service';

describe('EempManageService', () => {
  let service: EempManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EempManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

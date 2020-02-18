import { TestBed } from '@angular/core/testing';

import { HospitalAdminService } from './hospital-admin.service';

describe('HospitalAdminService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HospitalAdminService = TestBed.get(HospitalAdminService);
    expect(service).toBeTruthy();
  });
});

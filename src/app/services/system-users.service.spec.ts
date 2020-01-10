import { TestBed } from '@angular/core/testing';

import { SystemUsersService } from './system-users.service';

describe('SystemUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SystemUsersService = TestBed.get(SystemUsersService);
    expect(service).toBeTruthy();
  });
});

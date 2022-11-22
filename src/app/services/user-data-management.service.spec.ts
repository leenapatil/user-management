import { TestBed } from '@angular/core/testing';

import { UserDataManagementService } from './user-data-management.service';

describe('UserDataManagementService', () => {
  let service: UserDataManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDataManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

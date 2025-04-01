import { TestBed } from '@angular/core/testing';

import { LoginVisibilityService } from './login-visibility.service';

describe('LoginVisibilityService', () => {
  let service: LoginVisibilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginVisibilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { LanguageStubService } from './language-stub.service';

describe('LanguageStubService', () => {
  let service: LanguageStubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageStubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

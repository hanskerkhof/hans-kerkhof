import { TestBed } from '@angular/core/testing';

import { ResumeStubService } from './resume-stub.service';

describe('ResumeStubService', () => {
  let service: ResumeStubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResumeStubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

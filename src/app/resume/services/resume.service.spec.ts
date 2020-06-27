import { TestBed } from '@angular/core/testing';

import { ResumeService } from './resume.service';
import { HttpClientModule } from '@angular/common/http';

describe('ResumeService', () => {
  let service: ResumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ResumeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { ResumeSafeUrlPipe } from './resume-safe-url.pipe';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';

describe('ResumeSafeUrlPipe', () => {
  let pipe: ResumeSafeUrlPipe;
  let sanitized: DomSanitizer;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule],
      providers: [DomSanitizer],
    });
  });

  it('create an instance', () => {
    sanitized = TestBed.get(DomSanitizer);
    pipe = new ResumeSafeUrlPipe(sanitized);
    expect(pipe).toBeTruthy();
  });
});

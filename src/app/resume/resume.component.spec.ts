import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ResumeComponent } from './resume.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ResumeService } from './services/resume.service';
import { ResumeStubService } from './services/resume-stub.service';
const resume: any = require('../../../mocks/resume-mock.json');

describe('ResumeComponent', () => {
  let component: ResumeComponent;
  let fixture: ComponentFixture<ResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeComponent],
      providers: [{ provide: ResumeService, useClass: ResumeStubService }],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeComponent);
    component = fixture.componentInstance;
    component.resume = resume;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

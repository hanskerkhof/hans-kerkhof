import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { ResumeHighlightsComponent } from './highlights.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateLoaderStub } from '../../../../../test/stubs/translateStub';
const resume: any = require('../../../../../test/mocks/resume-mock.json');

describe('HighlightsComponent', () => {
  let component: ResumeHighlightsComponent;
  let fixture: ComponentFixture<ResumeHighlightsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useValue: TranslateLoaderStub,
          },
        }),
      ],
      declarations: [ResumeHighlightsComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeHighlightsComponent);
    component = fixture.componentInstance;
    component.highlights = resume.work[1].highlights;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import { ResumeBasicsComponent } from './resume-basics.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import {
  TranslateLoaderStub,
  TranslateServiceStub,
} from '../../../../../test/stubs/translateStub';
import { ResumeFileSizePipe } from '../../pipes/resume-file-size.pipe';
import { ResumeSafeUrlPipe } from '../../pipes/resume-safe-url.pipe';
const resume: any = require('../../../../../test/mocks/resume-mock.json');

describe('ResumeBasicsComponent', () => {
  let component: ResumeBasicsComponent;
  let fixture: ComponentFixture<ResumeBasicsComponent>;

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
      declarations: [
        ResumeBasicsComponent,
        ResumeFileSizePipe,
        ResumeSafeUrlPipe,
      ],
      providers: [
        { provide: TranslateService, useClass: TranslateServiceStub },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeBasicsComponent);
    component = fixture.componentInstance;
    component.section = resume.basics;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

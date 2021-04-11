import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MomentModule } from 'ngx-moment';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { ScrollSpyService } from './scroll-spy.service';
import { LanguageService } from './_services/language.service';
import { ResumeService } from './resume/services/resume.service';
import { ResumeStubService } from './resume/services/resume-stub.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TranslateLoaderStub, TranslateServiceStub } from '../../test/stubs/translateStub';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        MomentModule,
        HttpClientModule,
        RouterTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useValue: TranslateLoaderStub,
          },
        }),
      ],
      declarations: [AppComponent],
      providers: [
        ScrollSpyService,
        LanguageService,
        { provide: ResumeService, useClass: ResumeStubService },
        { provide: TranslateService, useClass: TranslateServiceStub },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

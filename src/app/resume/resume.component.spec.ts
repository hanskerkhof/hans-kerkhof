import {async, ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {ResumeComponent} from './resume.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

import {NgxMetaTagsModule} from 'ngx-meta-tags';

import {ResumeService} from './services/resume.service';
import {ResumeStubService} from './services/resume-stub.service';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateLoaderStub} from '../../../test/stubs/translateStub';

const resume: any = require('../../../test/mocks/resume-mock.json');

describe('ResumeComponent', () => {
  let component: ResumeComponent;
  let fixture: ComponentFixture<ResumeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeComponent],
      imports: [NgxMetaTagsModule.forRoot({}),
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useValue: TranslateLoaderStub,
          },
        }),
      ],
      providers: [{provide: ResumeService, useClass: ResumeStubService}],
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

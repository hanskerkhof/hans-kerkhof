import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeWorkComponent } from './resume-work.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateLoaderStub } from '../../../../../stubs/translateStub';
import { MomentModule } from 'ngx-moment';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ResumeWorkComponent', () => {
  let component: ResumeWorkComponent;
  let fixture: ComponentFixture<ResumeWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MomentModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useValue: TranslateLoaderStub,
          },
        }),
      ],
      declarations: [ResumeWorkComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

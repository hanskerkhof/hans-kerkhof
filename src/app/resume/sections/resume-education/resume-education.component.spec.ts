import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeEducationComponent } from './resume-education.component';
import { MomentModule } from 'ngx-moment';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateLoaderStub } from '../../../../../stubs/translateStub';

describe('ResumeEducationComponent', () => {
  let component: ResumeEducationComponent;
  let fixture: ComponentFixture<ResumeEducationComponent>;

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
      declarations: [ResumeEducationComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { LanguageSwitchComponent } from './language-switch.component';
import { LanguageService } from '../../_services/language.service';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateLoaderStub, TranslateServiceStub } from '../../../../test/stubs/translateStub';

describe('LanguageSwitchComponent', () => {
  let component: LanguageSwitchComponent;
  let fixture: ComponentFixture<LanguageSwitchComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useValue: TranslateLoaderStub,
        },
      }),
      ],
      declarations: [LanguageSwitchComponent],
      providers: [LanguageService,
        {provide: TranslateService, useClass: TranslateServiceStub},
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

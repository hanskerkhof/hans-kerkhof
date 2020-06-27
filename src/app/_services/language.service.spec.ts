import { TestBed } from '@angular/core/testing';
import { LanguageService } from './language.service';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
  TranslateStore,
} from '@ngx-translate/core';
import * as moment from 'moment';
import {
  TranslateLoaderStub,
  TranslateServiceStub,
} from '../../../stubs/translateStub';

describe('LanguageService', () => {
  let service: LanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useValue: TranslateLoaderStub,
          },
        }),
      ],
      providers: [
        LanguageService,
        { provide: TranslateService, useClass: TranslateServiceStub },
        { provide: TranslateStore, useClass: TranslateStore },
      ],
    });
    service = TestBed.inject(LanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have default language', () => {
    expect(service.defaultLanguage).toBe('nl');
  });

  it('should have available languages', () => {
    expect(service.availableLanguages).toEqual(['nl', 'en']);
  });

  it('should change the language', () => {
    service.setLanguage('en');
    expect(service.language).toBe('en');
  });

  it('should not change to invalid language', () => {
    service.setLanguage('ru');
    expect(service.language).toBe('en');
  });

  it('should have changed moment locale', () => {
    service.setLanguage('nl');
    expect(moment.locale()).toBe('nl');
    service.setLanguage('en');
    expect(moment.locale()).toBe('en');
    service.setLanguage('ru');
    expect(moment.locale()).toBe('en');
  });
});

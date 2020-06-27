import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable()
export class LanguageService {
  defaultLanguage = environment.defaultLanguage;
  private languageChangedSource = new Subject<string>();
  public languageChanged$: Observable<
    string
    > = this.languageChangedSource.asObservable();

  constructor(
    private translateService: TranslateService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    this.setDefaultLanguage();
  }

  private setDefaultLanguage() {
    this.setLanguage(this.language);
  }

  public get availableLanguages() {
    return ['nl', 'en'];
  }

  public get language(): string {
    let language = '';
    if (isPlatformBrowser(this.platformId)) {
      language = localStorage.getItem('language');
    }

    if (!language) {
      language = this.defaultLanguage;
    }
    return language;
  }

  public setLanguage(language: string) {
    if (this.availableLanguages.includes(language)) {
      this.translateService.use(language).subscribe(() => {
        this.languageChangedSource.next(language);
        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('language', language);
        }
        moment.locale(language);
      });
    }
  }
}

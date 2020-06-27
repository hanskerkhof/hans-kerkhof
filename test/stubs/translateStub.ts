import { TranslateLoader, TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

export class TranslateLoaderStub implements TranslateLoader {
  /* istanbul ignore next */
  getTranslation(lang: string): Observable<any> {
    return of({
      VALUE: 'translation value',
    });
  }
}

@Injectable()
export class TranslateServiceStub extends TranslateService {

  public use(): Observable<any> {
    return of('en');
  }

  public get(key): Observable<any> {
    return of('translation value');
  }
}

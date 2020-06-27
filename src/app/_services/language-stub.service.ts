import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LanguageStubService {
  defaultLanguage = environment.defaultLanguage;
  private languageChangedSource = new Subject<string>();
  public languageChanged$: Observable<
    string
  > = this.languageChangedSource.asObservable();

  constructor() {}

  setLanguage(language) {
    this.languageChangedSource.next(language);
  }
}

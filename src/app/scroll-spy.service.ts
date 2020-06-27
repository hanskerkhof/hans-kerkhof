import { Inject, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DOCUMENT } from '@angular/common';

export interface ScrollSpyInfo {
  active: Observable<ScrollItem | null>;
  unSpy: () => void;
}

export interface ScrollItem {
  element: Element;
  index: number;
}

@Injectable({
  providedIn: 'root',
})
export class ScrollSpyService {
  private scrollSpySubject = new Subject<string>();
  public scrollSpy$ = this.scrollSpySubject.asObservable();

  /* istanbul ignore next */
  public scrollSpyEvent(sectionId: string) {
    this.scrollSpySubject.next(sectionId);
  }
}

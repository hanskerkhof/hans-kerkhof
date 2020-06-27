import { Component, Inject, Input, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Resume, ResumeMetaSection } from '../../resume/models/resume';
import { ScrollSpyService } from '../../scroll-spy.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit, OnDestroy {
  @Input() resume: Resume;
  resizeObservable$: Observable<Event>;
  resizeSubscription$: Subscription;
  public sections: ResumeMetaSection[];
  public navOpen = false;
  public sectionId: string;

  constructor(private scrollSpyService: ScrollSpyService,
              @Inject(PLATFORM_ID) private platformId: object) {
  }

  ngOnInit(): void {
    this.sections = this.resume.meta.sections;
    this.sectionId = this.resume.meta.sections[0].sectionId;

    this.scrollSpyService.scrollSpy$.subscribe((sectionId) => {
      /* istanbul ignore next */
      this.sectionId = sectionId;
    });

    if (isPlatformBrowser(this.platformId)) {

      this.resizeObservable$ = fromEvent(window, 'resize');
      this.resizeSubscription$ = this.resizeObservable$
        .pipe(debounceTime(1000))
        .subscribe((event) => {
          /* istanbul ignore next */
          const t = event.target as Window;
          /* istanbul ignore next */
          if (t.innerWidth >= 992) {
            this.resetNav();
          }
        });
    }
  }

  toggleNav() {
    this.navOpen = !this.navOpen;
  }

  resetNav() {
    this.navOpen = false;
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      this.resizeSubscription$.unsubscribe();
    }
  }
}

import {
  Directive,
  Input,
  EventEmitter,
  Output,
  ElementRef,
  HostListener,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ScrollSpyService } from './scroll-spy.service';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[scrollSpy]',
})
export class ScrollSpyDirective {
  @Input() public spiedTags = [];
  @Output() public sectionChange = new EventEmitter<string>();
  private currentSection: string;
  private previousSection: string;

  constructor(
    private el: ElementRef,
    @Inject(DOCUMENT) private doc: any,
    private scrollSpyService: ScrollSpyService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
  }

  /* istanbul ignore next */
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    const children = this.el.nativeElement.getElementsByTagName('section');

    for (const child of children) {
      const element = child;
      const inViewport = element.offsetTop <= this.getWindowScrollTop();

      if (inViewport) {
        this.currentSection = element.id;
      }
    }

    if (this.previousSection !== this.currentSection) {
      this.previousSection = this.currentSection;
      this.sectionChange.emit(this.currentSection);
      this.scrollSpyService.scrollSpyEvent(this.currentSection);
    }
  }

  /* istanbul ignore next */
  private getWindowScrollTop(): number {
    return (window && window.pageYOffset) || 0;
  }
}

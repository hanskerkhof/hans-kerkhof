import { Component, Input, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { ResumeMetaSection } from '../../../resume/models/resume';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-nav-item]',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
})
export class NavItemComponent {
  @Input() item: ResumeMetaSection;
  @Input() selectedId: string;

  constructor(protected gaService: GoogleAnalyticsService) {}

  onClick(section: string): void {
    this.gaService.pageView(`/#${section}`, `section`, undefined, {});
    this.gaService.event(`#${section}`, 'section', null);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { ResumeMetaSection } from '../../../resume/models/resume';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-nav-list]',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss'],
})
export class NavListComponent {
  @Input() sections: ResumeMetaSection[];
  @Input() selectedId: string;
}

import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Resume} from './models/resume';
import {TranslateService} from '@ngx-translate/core';
import {NgxMetaTagsService} from 'ngx-meta-tags';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ResumeComponent implements OnInit {
  @Input() resume: Resume;
  @Input() language: string;

  constructor(private ngxMetaTagsService: NgxMetaTagsService,
              private translateService: TranslateService) {
  }

  ngOnInit(): void {
    this.ngxMetaTagsService.setMetaFromConfig({
      description: this.translateService.instant(this.resume.basics.summary),
      author: (this.resume.basics.firstName + ' ' + this.resume.basics.middleName + ' ' + this.resume.basics.lastName).replace(/\s+/g, ' ')
    });
  }
}

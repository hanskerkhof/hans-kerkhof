import { Component } from '@angular/core';
import { LanguageService } from './_services/language.service';
import { Resume } from './resume/models/resume';
import { Title } from '@angular/platform-browser';
import { ResumeService } from './resume/services/resume.service';
import { NgxMetaTagsService } from '../../projects/ngx-meta-tags/src/lib/ngx-meta-tags.service';
// import { NgxMetaTagsService } from '../../projects/ngx-meta-tags/src/lib/ngx-meta-tags.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public resume: Resume;
  public currentSection: string;

  constructor(public languageService: LanguageService,
              private resumeService: ResumeService,
              private ngxMetaTagsService: NgxMetaTagsService) {
    this.resumeService.getResume().subscribe((resume) => {
      this.resume = resume;
// console.log(this.resume);
//       this.ngxMetaTagsService.setMetaFromConfig({
//         description: this.resume.basics.summary,
//         author: this.resume.basics.firstName
//       });
      // this.ngxMetaTagsService.setDefaultMeta();
    });
  }

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }
}

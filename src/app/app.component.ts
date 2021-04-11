import { Component } from '@angular/core';
import { LanguageService } from './_services/language.service';
import { Resume } from './resume/models/resume';
import { ResumeService } from './resume/services/resume.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public resume: Resume;
  public currentSection: string;

  constructor(public languageService: LanguageService,
              private resumeService: ResumeService) {
    this.resumeService.getResume().subscribe((resume) => {
      this.resume = resume;
    });
  }

  onSectionChange(sectionId: string): string {
    return this.currentSection = sectionId;
  }
}

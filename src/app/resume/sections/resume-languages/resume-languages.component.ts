import { Component, Input, OnInit } from '@angular/core';
import { ResumeLanguage } from '../../models/resume';

@Component({
  selector: 'app-resume-languages',
  templateUrl: './resume-languages.component.html',
  styleUrls: ['./resume-languages.component.scss'],
})
export class ResumeLanguagesComponent {
  @Input() section: ResumeLanguage[];
  @Input() sectionId: string;
  @Input() language: string;
}

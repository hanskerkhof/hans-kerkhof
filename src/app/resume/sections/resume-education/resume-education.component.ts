import { Component, Input, OnInit } from '@angular/core';
import { ResumeEducation } from '../../models/resume';

@Component({
  selector: 'app-resume-education',
  templateUrl: './resume-education.component.html',
  styleUrls: ['./resume-education.component.scss'],
})
export class ResumeEducationComponent {
  @Input() section: ResumeEducation[];
  @Input() sectionId: string;
  @Input() language: string;
}

import { Component, Input, OnInit } from '@angular/core';
import { ResumeInterest } from '../../models/resume';

@Component({
  selector: 'app-resume-interests',
  templateUrl: './resume-interests.component.html',
  styleUrls: ['./resume-interests.component.scss'],
})
export class ResumeInterestsComponent {
  @Input() section: ResumeInterest[];
  @Input() sectionId: string;
  @Input() language: string;
}

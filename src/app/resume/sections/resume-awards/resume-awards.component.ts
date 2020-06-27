import { Component, Input, OnInit } from '@angular/core';
import { ResumeAward } from '../../models/resume';

@Component({
  selector: 'app-resume-awards',
  templateUrl: './resume-awards.component.html',
  styleUrls: ['./resume-awards.component.scss'],
})
export class ResumeAwardsComponent {
  @Input() section: ResumeAward[];
  @Input() sectionId: string;
  @Input() language: string;
}

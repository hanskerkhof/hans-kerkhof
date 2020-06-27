import { Component, Input, OnInit } from '@angular/core';
import { ResumeWork } from '../../models/resume';

@Component({
  selector: 'app-resume-work',
  templateUrl: './resume-work.component.html',
  styleUrls: ['./resume-work.component.scss'],
})
export class ResumeWorkComponent {
  @Input() section: ResumeWork[];
  @Input() sectionId: string;
  @Input() language: string;
}

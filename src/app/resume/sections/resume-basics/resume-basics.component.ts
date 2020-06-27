import { Component, Input, OnInit } from '@angular/core';
import { ResumeBasics } from '../../models/resume';

@Component({
  selector: 'app-resume-basics',
  templateUrl: './resume-basics.component.html',
  styleUrls: ['./resume-basics.component.scss'],
})
export class ResumeBasicsComponent {
  @Input() section: ResumeBasics;
  @Input() sectionId: string;
  @Input() language: string;
}

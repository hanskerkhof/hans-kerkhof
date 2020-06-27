import { Component, Input, OnInit } from '@angular/core';
import { ResumePublication } from '../../models/resume';

@Component({
  selector: 'app-resume-publications',
  templateUrl: './resume-publications.component.html',
  styleUrls: ['./resume-publications.component.scss'],
})
export class ResumePublicationsComponent {
  @Input() section: ResumePublication[];
  @Input() sectionId: string;
  @Input() language: string;
}

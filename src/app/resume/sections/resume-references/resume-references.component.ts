import { Component, Input, OnInit } from '@angular/core';
import { ResumeReference } from '../../models/resume';

@Component({
  selector: 'app-resume-references',
  templateUrl: './resume-references.component.html',
  styleUrls: ['./resume-references.component.scss'],
})
export class ResumeReferencesComponent {
  @Input() section: ResumeReference[];
  @Input() sectionId: string;
  @Input() language: string;
}

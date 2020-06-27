import { Component, Input, OnInit } from '@angular/core';
import { Resume } from '../models/resume';

@Component({
  selector: 'app-resume-sections',
  templateUrl: './resume-sections.component.html',
  styleUrls: ['./resume-sections.component.scss'],
})
export class ResumeSectionsComponent {
  @Input() resume: Resume;
  @Input() language: string;
  public hidden: boolean;

  constructor() {}
}

import { Component, Input, OnInit } from '@angular/core';
import { ResumeVolunteer } from '../../models/resume';

@Component({
  selector: 'app-resume-volunteer',
  templateUrl: './resume-volunteer.component.html',
  styleUrls: ['./resume-volunteer.component.scss'],
})
export class ResumeVolunteerComponent {
  @Input() section: ResumeVolunteer[];
  @Input() sectionId: string;
  @Input() language: string;
}

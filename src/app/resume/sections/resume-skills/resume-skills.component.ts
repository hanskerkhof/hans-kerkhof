import { Component, Input, OnInit } from '@angular/core';
import { ResumeSkill } from '../../models/resume';

@Component({
  selector: 'app-resume-skills',
  templateUrl: './resume-skills.component.html',
  styleUrls: ['./resume-skills.component.scss'],
})
export class ResumeSkillsComponent implements OnInit {
  @Input() section: ResumeSkill[];
  @Input() sectionId: string;
  @Input() language: string;

  ngOnInit(): void {}
}

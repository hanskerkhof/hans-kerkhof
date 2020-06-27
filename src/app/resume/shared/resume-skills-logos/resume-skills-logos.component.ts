import { Component, Input, OnInit } from '@angular/core';
import { ResumeSkill } from '../../models/resume';

@Component({
  selector: 'app-resume-skills-logos',
  templateUrl: './resume-skills-logos.component.html',
  styleUrls: ['./resume-skills-logos.component.scss'],
})
export class ResumeSkillsLogosComponent implements OnInit {
  @Input() skill: ResumeSkill;
  public skillImages: string[];
  constructor() {}

  ngOnInit(): void {
    this.skillImages = this.skill.keywords.map((item) => {
      const re = /[^0-9a-zA-Z]+gi/;
      return `${this.skill.imageBaseUrl}/${item
        .toLowerCase()
        .replace(/\s/g, '-')}.png`;
    });
  }
}

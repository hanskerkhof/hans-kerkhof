import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeSkillsLogosComponent } from './resume-skills-logos.component';

describe('ResumeSkillsLogosComponent', () => {
  let component: ResumeSkillsLogosComponent;
  let fixture: ComponentFixture<ResumeSkillsLogosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeSkillsLogosComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeSkillsLogosComponent);
    component = fixture.componentInstance;
    component.skill = {
      name: 'name',
      level: 'level',
      keywords: ['keyword one', 'keyword two'],
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

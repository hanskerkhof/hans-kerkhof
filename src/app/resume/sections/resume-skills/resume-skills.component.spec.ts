import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { ResumeSkillsComponent } from './resume-skills.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ResumeSkillsComponent', () => {
  let component: ResumeSkillsComponent;
  let fixture: ComponentFixture<ResumeSkillsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeSkillsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeSkillsComponent);
    component = fixture.componentInstance;
    component.section = [
      {
        name: 'name',
        level: 'level',
        keywords: ['keyword one', 'keyword two'],
      },
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeVolunteerComponent } from './resume-volunteer.component';

describe('ResumeVolunteerComponent', () => {
  let component: ResumeVolunteerComponent;
  let fixture: ComponentFixture<ResumeVolunteerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeVolunteerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeVolunteerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { ResumeInterestsComponent } from './resume-interests.component';

describe('ResumeInterestsComponent', () => {
  let component: ResumeInterestsComponent;
  let fixture: ComponentFixture<ResumeInterestsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeInterestsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeInterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

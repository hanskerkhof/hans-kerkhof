import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeAwardsComponent } from './resume-awards.component';

describe('ResumeAwardsComponent', () => {
  let component: ResumeAwardsComponent;
  let fixture: ComponentFixture<ResumeAwardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeAwardsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

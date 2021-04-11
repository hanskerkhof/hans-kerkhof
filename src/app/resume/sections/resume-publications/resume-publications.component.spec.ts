import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumePublicationsComponent } from './resume-publications.component';

describe('ResumePublicationsComponent', () => {
  let component: ResumePublicationsComponent;
  let fixture: ComponentFixture<ResumePublicationsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ResumePublicationsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumePublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

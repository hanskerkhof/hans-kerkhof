import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';

import { ResumeLanguagesComponent } from './resume-languages.component';

describe('ResumeLanguagesComponent', () => {
  let component: ResumeLanguagesComponent;
  let fixture: ComponentFixture<ResumeLanguagesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeLanguagesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

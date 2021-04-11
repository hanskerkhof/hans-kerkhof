import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ResumeSectionsComponent } from './resume-sections.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
const resume: any = require('../../../../test/mocks/resume-mock.json');

describe('ResumeSectionsComponent', () => {
  let component: ResumeSectionsComponent;
  let fixture: ComponentFixture<ResumeSectionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeSectionsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeSectionsComponent);
    component = fixture.componentInstance;
    component.resume = resume;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

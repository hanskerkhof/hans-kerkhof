import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NavComponent } from './nav.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ScrollSpyService } from '../../scroll-spy.service';

const resume: any = require('../../../../test/mocks/resume-mock.json');

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NavComponent],
      providers: [ScrollSpyService],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    component.resume = resume;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle navigation', () => {
    component.toggleNav();
    expect(component.navOpen).toBeTruthy();
    component.toggleNav();
    expect(component.navOpen).toBeFalsy();
    component.toggleNav();
    expect(component.navOpen).toBeTruthy();
  });

  it('should reset navigation', () => {
    component.resetNav();
    expect(component.navOpen).toBeFalsy();
    component.toggleNav();
    expect(component.navOpen).toBeTruthy();
    component.toggleNav();
    expect(component.navOpen).toBeFalsy();
  });
});

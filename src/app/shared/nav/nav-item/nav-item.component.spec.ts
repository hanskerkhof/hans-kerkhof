import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import { NavItemComponent } from './nav-item.component';
const resume: any = require('../../../../../test/mocks/resume-mock.json');

describe('NavItemComponent', () => {
  let component: NavItemComponent;
  let fixture: ComponentFixture<NavItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NavItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavItemComponent);
    component = fixture.componentInstance;
    component.item = resume.meta.sections[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

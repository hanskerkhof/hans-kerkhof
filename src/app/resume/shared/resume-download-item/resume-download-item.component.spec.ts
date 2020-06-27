import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ResumeDownloadItemComponent } from './resume-download-item.component';
import { ResumeMimeToFaIconPipe } from '../../pipes/resume-mime-to-fa-icon.pipe';
import { ResumeFileSizePipe } from '../../pipes/resume-file-size.pipe';
const resume: any = require('../../../../../test/mocks/resume-mock.json');

describe('ResumeDownloadItemComponent', () => {
  let component: ResumeDownloadItemComponent;
  let fixture: ComponentFixture<ResumeDownloadItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ResumeDownloadItemComponent,
        ResumeFileSizePipe,
        ResumeMimeToFaIconPipe,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeDownloadItemComponent);
    component = fixture.componentInstance;
    component.language = 'nl';
    component.download = component.download = resume.basics.downloads[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

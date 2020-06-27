import { Component, Input, OnInit } from '@angular/core';
import { ResumeDownload } from '../../models/resume';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-resume-download-item',
  templateUrl: './resume-download-item.component.html',
  styleUrls: ['./resume-download-item.component.scss'],
})
export class ResumeDownloadItemComponent implements OnInit {
  @Input() download: ResumeDownload;
  @Input() language: string;

  constructor(protected gaService: GoogleAnalyticsService) {}

  ngOnInit(): void {}

  onDownload(downloadItem: ResumeDownload) {
    this.gaService.pageView(
      `/downloads/${downloadItem.path}`,
      `download`,
      undefined,
      {}
    );
    this.gaService.event(downloadItem.path, 'download', null);
  }
}

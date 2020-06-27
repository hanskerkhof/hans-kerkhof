import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-resume-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss'],
})
export class ResumeHighlightsComponent implements OnInit {
  @Input() highlights: string[];
  public highlightItems: string[];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.highlightItems = this.highlights
      .map((item) => {
        const translated = this.translate.instant(item);
        return translated !== item ? translated : '';
      })
      .filter((item) => {
        return item ? item : false;
      });
  }
}

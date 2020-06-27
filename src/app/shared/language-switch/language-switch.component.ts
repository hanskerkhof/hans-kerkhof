import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { LanguageService } from '../../_services/language.service';

@Component({
  selector: 'app-language-switch',
  templateUrl: './language-switch.component.html',
  styleUrls: ['./language-switch.component.scss'],
})
export class LanguageSwitchComponent implements OnInit {
  public languages;

  constructor(
    public languageService: LanguageService,
    protected gaService: GoogleAnalyticsService
  ) {}

  ngOnInit(): void {
    this.languages = this.languageService.availableLanguages;
  }

  setLanguage(language: string) {
    this.gaService.pageView(
      `/${language}`,
      `set-language-${language}`,
      undefined,
      {}
    );
    this.gaService.event(language, 'language-switch', null);

    this.languageService.setLanguage(language);
  }
}

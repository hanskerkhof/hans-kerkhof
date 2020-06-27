import { Component, OnDestroy, OnInit, VERSION } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Subscription } from 'rxjs/internal/Subscription';
import { LanguageService } from '../../_services/language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit, OnDestroy {
  public environment = environment;
  public angularVersion = VERSION;
  public language: string;
  private languageSubscription: Subscription;

  constructor(public languageService: LanguageService) {}

  ngOnInit(): void {
    this.language = this.languageService.language;
    this.languageSubscription = this.languageService.languageChanged$.subscribe(
      (language) => {
        this.language = language;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgxMetaTagsModule} from 'ngx-meta-tags';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LanguageService } from './_services/language.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ResumeModule } from './resume/resume.module';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';
import { ScrollSpyDirective } from './scroll-spy.directive';
import { environment } from '../environments/environment';

export function createTranslateLoader(http: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(http, `${environment.api.url}/i18n/`, '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ScrollSpyDirective
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      },
      defaultLanguage: 'nl'
    }),
    SharedModule,
    ResumeModule.forRoot(),
    NgxGoogleAnalyticsModule.forRoot('UA-168995347-1'),
    NgxGoogleAnalyticsRouterModule,
    NgxMetaTagsModule.forRoot(
      {
        title: 'Hans Kerkhof - Resume',
        url: 'https://hanskerkhof.nl',
        image: 'https://hanskerkhof.nl/assets/images/hanskerkhof-square.jpg'
      }
    ),
    // NgxMetaTagsModule.forRoot(
    //   {
    //     title: 'X Hans kerkhof',
    //     description: 'X Description',
    //     author: 'X Author',
    //     url: 'X url',
    //     image: 'X Image'
    //   }
    // ),
  ],
  providers: [LanguageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

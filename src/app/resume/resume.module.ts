import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import { ResumeSectionsComponent } from './resume-sections/resume-sections.component';
import { ResumeBasicsComponent } from './sections/resume-basics/resume-basics.component';
import { ResumeAwardsComponent } from './sections/resume-awards/resume-awards.component';
import { ResumeEducationComponent } from './sections/resume-education/resume-education.component';
import { ResumeInterestsComponent } from './sections/resume-interests/resume-interests.component';
import { ResumeLanguagesComponent } from './sections/resume-languages/resume-languages.component';
import { ResumePublicationsComponent } from './sections/resume-publications/resume-publications.component';
import { ResumeReferencesComponent } from './sections/resume-references/resume-references.component';
import { ResumeSkillsComponent } from './sections/resume-skills/resume-skills.component';
import { ResumeVolunteerComponent } from './sections/resume-volunteer/resume-volunteer.component';
import { ResumeWorkComponent } from './sections/resume-work/resume-work.component';
import { MomentModule } from 'ngx-moment';
import { ResumeFileSizePipe } from './pipes/resume-file-size.pipe';
// import { GalleryModule } from '../gallery/gallery.module';
import { ResumeService } from './services/resume.service';
// import {
//   TranslateLoader,
//   TranslateModule,
//   TranslateService,
// } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
// import nl from '../../assets/i18n/nl.json';
// import en from '../../assets/i18n/en.json';
import { ResumeSafeUrlPipe } from './pipes/resume-safe-url.pipe';
import { ResumeReplacePipe } from './pipes/resume-replace.pipe';
import { ResumeHighlightsComponent } from './shared/highlights/highlights.component';
import { ResumeSkillsLogosComponent } from './shared/resume-skills-logos/resume-skills-logos.component';
import { ResumeDownloadItemComponent } from './shared/resume-download-item/resume-download-item.component';
import { ResumeMimeToFaIconPipe } from './pipes/resume-mime-to-fa-icon.pipe';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { GalleryModule } from '../gallery/gallery.module';
import { AppShellNoRenderDirective } from './shared/shell-no-render.directive';

// export class StaticTranslateLoader implements TranslateLoader {
//   getTranslation(lang: string): Observable<any> {
//     return of(nl);
//   }
// }

@NgModule({
  declarations: [
    ResumeComponent,
    ResumeSectionsComponent,
    ResumeBasicsComponent,
    ResumeAwardsComponent,
    ResumeEducationComponent,
    ResumeInterestsComponent,
    ResumeLanguagesComponent,
    ResumePublicationsComponent,
    ResumeReferencesComponent,
    ResumeSkillsComponent,
    ResumeVolunteerComponent,
    ResumeWorkComponent,
    ResumeFileSizePipe,
    ResumeSafeUrlPipe,
    ResumeReplacePipe,
    ResumeHighlightsComponent,
    ResumeSkillsLogosComponent,
    ResumeDownloadItemComponent,
    ResumeMimeToFaIconPipe,
    AppShellNoRenderDirective,
  ],
  imports: [
    CommonModule,
    MomentModule,
    TranslateModule.forChild({ defaultLanguage: 'nl' }),
    GalleryModule,
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useClass: StaticTranslateLoader,
    //   },
    //   defaultLanguage: 'nl',
    // }),
    // TranslateModule.forRoot(),
  ],
  exports: [
    ResumeComponent,
    ResumeSectionsComponent,
    ResumeBasicsComponent,
    ResumeAwardsComponent,
    ResumeEducationComponent,
    ResumeInterestsComponent,
    ResumeLanguagesComponent,
    ResumePublicationsComponent,
    ResumeReferencesComponent,
    ResumeSkillsComponent,
    ResumeVolunteerComponent,
    ResumeWorkComponent,
  ],
})
export class ResumeModule {
  // constructor(private translateService: TranslateService) {
  //   translateService.setTranslation('nl', nl, true);
  //   translateService.setTranslation('en', en, true);
  // }

  static forRoot(): ModuleWithProviders<ResumeModule> {
    return {
      ngModule: ResumeModule,
      providers: [ResumeService]
    };
  }
}

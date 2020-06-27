import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';
import { MomentModule } from 'ngx-moment';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateLoaderStub } from '../../../../test/stubs/translateStub';
import { LanguageService } from '../../_services/language.service';
import { LanguageStubService } from '../../_services/language-stub.service';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MomentModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useValue: TranslateLoaderStub,
          },
        }),
      ],
      providers: [{ provide: LanguageService, useClass: LanguageStubService }],
      declarations: [FooterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;

    const dateString = new Date().toISOString().slice(0, 19).replace('T', ' ');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

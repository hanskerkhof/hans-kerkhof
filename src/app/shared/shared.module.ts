import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { LanguageSwitchComponent } from './language-switch/language-switch.component';
import { NavListComponent } from './nav/nav-list/nav-list.component';
import { NavItemComponent } from './nav/nav-item/nav-item.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    NavComponent, NavListComponent, NavItemComponent, FooterComponent, LanguageSwitchComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    NavComponent, NavListComponent, NavItemComponent, FooterComponent
  ]
})
export class SharedModule { }

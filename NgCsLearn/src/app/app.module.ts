import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import localeEn from '@angular/common/locales/en';
import localeEs from '@angular/common/locales/es';
import localeAr from '@angular/common/locales/ar';
import { SharedModule } from './shared/shared.module';

registerLocaleData(localeEn, 'en');
registerLocaleData(localeEs, 'es');
registerLocaleData(localeAr, 'ar')

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

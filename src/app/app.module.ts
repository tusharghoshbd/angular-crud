import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';


import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { MenuComponent } from './shared/layout/menu/menu.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { UserService } from './services/user.service';
import { I18nService } from './services/i18n.service';
import {I18nPipe} from "./shared/i18n/i18n.pipe";


@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    NotFoundComponent,
    I18nPipe
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService, I18nService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

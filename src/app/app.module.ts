import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {DonationFormComponent} from "./donation-form/donation-form.component";
import {HomeComponent} from "./home/home.component";
import {Store} from "./app.store";
import {TranslateService} from "./translation/trnanslate.service";
import {TRANSLATION_PROVIDERS} from "./translation/translation";
import {TranslatePipe} from "./translation/transplate.pipe";
import {routing} from "./app.route";
import {APP_ACTIONS} from "./actions/app.actions";

@NgModule({
  declarations: [
    AppComponent,
    DonationFormComponent,
    HomeComponent,
    TranslatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [TRANSLATION_PROVIDERS, TranslateService, Store, ...APP_ACTIONS],
  bootstrap: [AppComponent]
})
export class AppModule { }

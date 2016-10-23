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
import {APP_Middlewares} from "./middlewares/app.middlewares";
import {MapComponent} from "./map/map.component";
import {AgmCoreModule} from "angular2-google-maps/core";
import {NavigationComponent} from "./navigation/navigation.component";
import {OrganizationTableComponent} from "./organization-table/organization-table.component";
import {OrgToMarkerPipe} from "./org-to-marker.pipe";
import {OrganizationInfoComponent} from "./organization-info/organization-info.component";
import {GetPropertyPipe} from "./get-property.pipe";

@NgModule({
  declarations: [
    AppComponent,
    DonationFormComponent,
    HomeComponent,
    TranslatePipe,
    MapComponent,
    NavigationComponent,
    OrganizationTableComponent,
    OrgToMarkerPipe,
    OrganizationInfoComponent,
    GetPropertyPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AgmCoreModule.forRoot({apiKey:'AIzaSyC84HV6f-FVg_eDndSsIBJpeBeWHhdtOEM'})
  ],
  providers: [TRANSLATION_PROVIDERS, TranslateService, ...APP_Middlewares, Store, ...APP_ACTIONS],
  bootstrap: [AppComponent]
})
export class AppModule { }

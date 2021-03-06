import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {DonationFormComponent} from "./components/donation-form/donation-form.component";
import {HomeComponent} from "./components/home/home.component";
import {Store} from "./app.store";
import {TranslateService} from "./translation/trnanslate.service";
import {TRANSLATION_PROVIDERS} from "./translation/translation";
import {TranslatePipe} from "./translation/transplate.pipe";
import {routing} from "./app.route";
import {APP_ACTIONS} from "./actions/app.actions";
import {APP_Middlewares} from "./middlewares/app.middlewares";
import {MapComponent} from "./components/map/map.component";
import {AgmCoreModule} from "angular2-google-maps/core";
import {NavigationComponent} from "./navigation/navigation.component";
import {OrganizationTableComponent} from "./components/organization-table/organization-table.component";
import {OrgToMarkerPipe} from "./pipes/org-to-marker.pipe";
import {OrganizationInfoComponent} from "./components/organization-info/organization-info.component";
import {GetPropertyPipe} from "./pipes/get-property.pipe";
import {Angular2DataTableModule} from "angular2-data-table";
import {FlattenOrganizationPipePipe} from "./pipes/flatten-organization-pipe.pipe";
import {MetersToKilometersPipe} from "./pipes/meters-to-kilometers.pipe";

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
    GetPropertyPipe,
    FlattenOrganizationPipePipe,
    MetersToKilometersPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    Angular2DataTableModule,
    AgmCoreModule.forRoot({apiKey:'AIzaSyC84HV6f-FVg_eDndSsIBJpeBeWHhdtOEM'})
  ],
  providers: [TRANSLATION_PROVIDERS, TranslateService, ...APP_Middlewares, Store, ...APP_ACTIONS],
  bootstrap: [AppComponent]
})
export class AppModule { }

/**
 * Created by ranwahle on 13/10/2016.
 */
import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {DonationFormComponent} from "./donation-form/donation-form.component";
import {HomeComponent} from "./home/home.component";

/**
 * Created by ranwahle on 12/10/2016.
 */
const appRoutes: Routes = [{path: '', component: HomeComponent},
  {path: 'donation-form', component: DonationFormComponent
  }];

export const appRoutingProviders: any[] = [



];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


export class RoutesPaths {
  public paths: string[];

  constructor() {
    this.paths = appRoutes.map(route => route.path);
  }
}

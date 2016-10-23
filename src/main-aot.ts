// import './polyfills.ts';
//
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { enableProdMode } from '@angular/core';
// import { environment } from './environments/environment';
// import { AppModule } from './app/';
//
// if (environment.production) {
//   enableProdMode();
// }

//platformBrowserDynamic().bootstrapModule(AppModule);


import { platformBrowser }    from '@angular/platform-browser';
import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory';
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);

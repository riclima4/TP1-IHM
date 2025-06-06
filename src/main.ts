import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { environment } from './environments/environment.prod';
import { enableProdMode } from '@angular/core';

defineCustomElements(window);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then(() => {
  if ('serviceWorker' in navigator && environment.production) {
    navigator.serviceWorker.register('ngsw-worker.js');
  }
}).catch(err => console.log(err));
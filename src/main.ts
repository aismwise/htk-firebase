import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HtkAppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(HtkAppComponent, [
  FIREBASE_PROVIDERS,
  defaultFirebase('https://hackers-toolkit.firebaseio.com')
]);

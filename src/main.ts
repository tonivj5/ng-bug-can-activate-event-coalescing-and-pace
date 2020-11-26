import { ApplicationRef, enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

let count = 0;
const { tick } = ApplicationRef.prototype;
ApplicationRef.prototype.tick = function logTick(...args: any[]) {
  console.log(`Tick - ${++count}`);

  return tick.apply(this, args);
};

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  // if you disable this or remove pace-js, it works
  .bootstrapModule(AppModule, { ngZoneEventCoalescing: true })
  .catch((err) => console.error(err));

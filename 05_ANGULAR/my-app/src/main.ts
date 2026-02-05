import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app'; // Busca la clase AppComponent en el archivo app.ts

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
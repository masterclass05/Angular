import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app'; // Busca la clase AppComponent en el archivo app.ts
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';

  bootstrapApplication(App, {
 providers: [provideRouter(routes)]
})

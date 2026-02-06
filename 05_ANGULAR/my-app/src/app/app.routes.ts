// src/app/app.routes.ts (tu archivo)
import { Routes } from '@angular/router';
import { App } from './app';
import { Pokemon } from './components/pokemon/pokemon';

export const routes: Routes = [
  { path: 'pokemon', component:Pokemon, title: 'Pokemon' }
];

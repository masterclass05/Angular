import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router'; // <--- IMPORTANTE

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  template: `
    <nav>
      <a routerLink="/heroes" routerLinkActive="activo">Ir a Lista</a> | 
      <a routerLink="/detalle" routerLinkActive="activo">Ver Detalle</a>
    </nav>
    <hr>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { }
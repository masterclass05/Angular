import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [], // Aquí no se ponen los otros componentes, se dejan vacíos o con CommonModule
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  constructor(private router: Router) {} 

  entrar() {
    alert('Login correcto. ¡Bienvenido!');
    this.router.navigate(['/heroes']); 
  }
}
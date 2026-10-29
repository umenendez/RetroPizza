import { Component, output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})

export class Navbar {
  textoBusqueda = output<string>();

  buscarPizza(texto: string) {
    this.textoBusqueda.emit(texto);
  }
}


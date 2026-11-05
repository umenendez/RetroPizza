import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  busquedaNA = output<string>();
  vistaNA = output<string>();

  vistaActiva = input('listado');
  unidadesPedido = input(0);
}

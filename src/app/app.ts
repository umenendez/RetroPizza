import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Header } from './components/header/header';
import { PizzaList } from './components/pizza-list/pizza-list';
import { OrderForm } from './components/order-form/order-form';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Header, PizzaList, OrderForm, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
textoBusqueda = '';

filtrarPorNombre(texto: string) {
  this.textoBusqueda = texto;
}

}


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
  pedido: {
    nombre: string;
    precio: number;
    cantidad: number;
  }[] = [];

  agregarAlPedido(item: {
    nombre: string;
    precio: number;
    cantidad: number;
  }) {
    const existente = this.pedido.find(
      pizza => pizza.nombre === item.nombre
    );

    if (existente) {
      existente.cantidad += item.cantidad;
    } else {
      this.pedido.push({ ...item });
    }
  }


  finalizarPedido() {
    this.pedido = [];

    const listaPizzas = document.getElementById('pizzas');

    listaPizzas?.scrollIntoView({ behavior: 'smooth' });
    listaPizzas?.focus();
  }


  textoBusqueda = '';

  filtrarPorNombre(texto: string) {
    this.textoBusqueda = texto;
  }

}


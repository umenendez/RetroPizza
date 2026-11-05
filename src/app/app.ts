import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Header } from './components/header/header';
import { PizzaList } from './components/pizza-list/pizza-list';
import { Pedido } from './components/pedido/pedido';
import { FormularioPago } from './components/formulario-pago/formulario-pago';
import { Footer } from './components/footer/footer';
import { ItemPedido } from './models/item-pedido.model';

@Component({
  selector: 'app-root',
  imports: [Navbar, Header, PizzaList, Pedido, FormularioPago, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  vista = 'listado';

  busquedaApp = '';

  itemsPedido: ItemPedido[] = [];

  cambiarVista(vista: string) {
    this.vista = vista;
  }

  cambiarBusqueda(texto: string) {
    this.busquedaApp = texto;
  }

  agregarItemAlPedido(item: ItemPedido) {
    const indice = this.itemsPedido.findIndex(
      existente => existente.nombre === item.nombre
    );

    if (indice !== -1) {
      const existente = this.itemsPedido[indice];

      // Reemplazamos el array y el objeto para que Angular detecte
      // siempre el cambio y actualice el pedido acumulado.
      this.itemsPedido = this.itemsPedido.map((actual, i) =>
        i === indice
          ? {
              ...actual,
              cantidad: actual.cantidad + item.cantidad
            }
          : actual
      );

      return;
    }

    this.itemsPedido = [
      ...this.itemsPedido,
      {
        nombre: item.nombre,
        precio: item.precio,
        cantidad: item.cantidad,
        imagen: item.imagen
      }
    ];
  }

  quitarItem(posicion: number) {
    this.itemsPedido = this.itemsPedido.filter((_, i) => i !== posicion);
  }

  finalizarPedido() {
    alert('¡Muchas gracias por tu pedido!');
    this.itemsPedido = [];
    this.vista = 'listado';
  }

  totalUnidades(): number {
    let suma = 0;
    for (const item of this.itemsPedido) {
      suma = suma + item.cantidad;
    }
    return suma;
  }
}

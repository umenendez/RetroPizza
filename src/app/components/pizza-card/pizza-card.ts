
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-pizza-card',
  imports: [],
  templateUrl: './pizza-card.html',
  styleUrl: './pizza-card.scss'
})
export class PizzaCard {

  nombre = input.required<string>();
  precio = input.required<number>();
  imagen = input("assets/img1.png");
  ingredientes = input<string[]>([]);

  cantidad = 1;

  cantidadPedido = output<{
    nombre: string;
    precio: number;
    cantidad: number;
  }>();

  pedirPizza() {
    if (this.cantidad < 1 || !Number.isInteger(this.cantidad)) {
      return;
    }

    this.cantidadPedido.emit({
      nombre: this.nombre(),
      precio: this.precio(),
      cantidad: this.cantidad
    });
  }
}

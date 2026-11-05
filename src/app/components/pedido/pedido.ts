import { Component, input, output } from '@angular/core';
import { ItemPedido } from '../../models/item-pedido.model';

@Component({
  selector: 'app-pedido',
  imports: [],
  templateUrl: './pedido.html',
  styleUrl: './pedido.scss'
})
export class Pedido {
  itemsPedido = input.required<ItemPedido[]>();

  itemQuitado = output<number>();

  subtotal(item: ItemPedido): number {
    return item.precio * item.cantidad;
  }

  total(): number {
    let suma = 0;
    for (const item of this.itemsPedido()) {
      suma = suma + this.subtotal(item);
    }
    return suma;
  }
}

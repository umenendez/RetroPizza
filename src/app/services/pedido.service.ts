import { Injectable } from '@angular/core';
import { ItemPedido } from '../models/item-pedido.model';

@Injectable({ providedIn: 'root' })
export class PedidoService {
  items: ItemPedido[] = [];

  agregar(item: ItemPedido) {
    const existente = this.items.find(i => i.nombre === item.nombre);

    if (existente) {
      existente.cantidad += item.cantidad;
    } else {
      this.items.push({ ...item });
    }
  }

  total() {
    return this.items.reduce((suma, i) => suma + i.precio * i.cantidad, 0);
  }

  vaciar() {
    this.items = [];
  }
}

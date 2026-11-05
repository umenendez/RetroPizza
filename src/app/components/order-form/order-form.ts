import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { ItemPedido } from '../../models/item-pedido.model';
import { PedidoService } from '../../services/pedido.service';

@Component({
  selector: 'app-order-form',
  imports: [ReactiveFormsModule],
  templateUrl: './order-form.html',
  styleUrl: './order-form.scss'
})
export class OrderForm {

  pedidoService = inject(PedidoService);

  gracias = false;

  orderForm = new FormGroup({
    hora: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    metodoPago: new FormControl('tarjeta', Validators.required),
    tarjeta: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{16}$')
    ]),
    bizum: new FormControl('')
  });

  subtotal(item: ItemPedido) {
    return item.precio * item.cantidad;
  }

  cambiarMetodoPago() {
    const metodo = this.orderForm.get('metodoPago')?.value;
    const tarjeta = this.orderForm.get('tarjeta');
    const bizum = this.orderForm.get('bizum');

    if (metodo === 'tarjeta') {
      tarjeta?.setValidators([
        Validators.required,
        Validators.pattern('^[0-9]{16}$')
      ]);

      bizum?.clearValidators();
      bizum?.setValue('');
    } else {
      bizum?.setValidators([
        Validators.required,
        Validators.pattern('^[0-9]{9}$')
      ]);

      tarjeta?.clearValidators();
      tarjeta?.setValue('');
    }

    tarjeta?.updateValueAndValidity();
    bizum?.updateValueAndValidity();
  }

  sendOrder() {
    if (this.pedidoService.items.length === 0) {
      return;
    }

    if (this.orderForm.invalid) {
      this.orderForm.markAllAsTouched();
      return;
    }

    this.pedidoService.vaciar();
    this.gracias = true;
  }
}

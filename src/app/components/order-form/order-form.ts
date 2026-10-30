
import { Component, input, output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-order-form',
  imports: [ReactiveFormsModule],
  templateUrl: './order-form.html',
  styleUrl: './order-form.scss'
})
export class OrderForm {

  pedido = input<{
    nombre: string;
    precio: number;
    cantidad: number;
  }[]>([]);

  pedidoCompletado = output<void>();

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

  subtotal(item: {
    nombre: string;
    precio: number;
    cantidad: number;
  }) {
    return item.precio * item.cantidad;
  }

  totalPedido() {
    return this.pedido().reduce(
      (total, item) => total + this.subtotal(item),
      0
    );
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
    if (this.pedido().length === 0) {
      return;
    }

    if (this.orderForm.invalid) {
      this.orderForm.markAllAsTouched();
      return;
    }

    this.gracias = true;

    this.pedidoCompletado.emit();

    this.orderForm.reset({
      hora: '',
      direccion: '',
      metodoPago: 'tarjeta',
      tarjeta: '',
      bizum: ''
    });

    this.cambiarMetodoPago();
  }
}

import { Component, input, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-pago',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-pago.html',
  styleUrl: './formulario-pago.scss'
})
export class FormularioPago {
  totalPedido = input(0);

  pagoRealizado = output<void>();

  orderForm = new FormGroup({
    hora: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    metodoPago: new FormControl('tarjeta', Validators.required),
    tarjeta: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{16}$')]),
    bizum: new FormControl({ value: '', disabled: true }, [Validators.required, Validators.pattern('^[0-9]{9}$')])
  });

  constructor() {
    this.orderForm.controls.metodoPago.valueChanges.subscribe((metodo) => {
      if (metodo === 'tarjeta') {
        this.orderForm.controls.tarjeta.enable();
        this.orderForm.controls.bizum.disable();
        this.orderForm.controls.bizum.setValue('');
      } else {
        this.orderForm.controls.bizum.enable();
        this.orderForm.controls.tarjeta.disable();
        this.orderForm.controls.tarjeta.setValue('');
      }
    });
  }

  get hora() {
    return this.orderForm.get('hora');
  }
  get direccion() {
    return this.orderForm.get('direccion');
  }
  get tarjeta() {
    return this.orderForm.get('tarjeta');
  }
  get bizum() {
    return this.orderForm.get('bizum');
  }

  sendOrder() {
    if (this.totalPedido() === 0) {
      return;
    }

    if (this.orderForm.invalid) {
      this.orderForm.markAllAsTouched();
      return;
    }

    this.pagoRealizado.emit();
    this.orderForm.reset({ metodoPago: 'tarjeta' });
  }
}

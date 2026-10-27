import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-order-form',
  imports: [ReactiveFormsModule],
  templateUrl: './order-form.html',
  styleUrl: './order-form.scss'
})
export class OrderForm {

  pizzas: string[] = [
    'Pixel Pepper',
    'Super Mushroom',
    'Boss BBQ',
    'Veggie Quest',
    'Final Boss',
    'Blue Screen',
    'Coin Collector',
    'Game Over'
  ];

  orderForm = new FormGroup({
    pizza: new FormControl(''),
    nombre: new FormControl(''),
    telefono: new FormControl(''),
    confirmar: new FormControl(false)
  });

  sendOrder() {
    alert('Pedido: ' + this.orderForm.value.pizza + '\nde: ' + this.orderForm.value.nombre);
  }
}

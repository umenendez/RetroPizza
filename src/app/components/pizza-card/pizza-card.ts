import { Component, input } from '@angular/core';

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

}

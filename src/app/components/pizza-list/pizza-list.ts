import { Component } from '@angular/core';
import { PizzaCard } from '../pizza-card/pizza-card';
import { Pizza } from '../../models/pizza.model';

import { input, output } from '@angular/core';



@Component({
  selector: 'app-pizza-list',
  imports: [PizzaCard],
  templateUrl: './pizza-list.html',
  styleUrl: './pizza-list.scss'

})


export class PizzaList {
  cantidadPedido = output<{
  nombre: string;
  precio: number;
  cantidad: number;
}>();

recibirPedido(item: {
  nombre: string;
  precio: number;
  cantidad: number;
}) {
  this.cantidadPedido.emit(item);
}


  filtrarPizzas() {
    const texto = this.textoBusqueda().toLowerCase().trim();

    return this.pizzas.filter(pizza =>
      pizza.nombre.toLowerCase().includes(texto) ||
      pizza.ingredientes.some(ingrediente =>
        ingrediente.toLowerCase().includes(texto)
      )
    );
  }



  textoBusqueda = input<string>('');
  pizzas: Pizza[] = [
    {
      id: 1,
      nombre: 'Pixel Pepper',
      precio: 12.50,
      imagen: 'https://t4.ftcdn.net/jpg/21/21/41/85/360_F_2121418503_8wPO7wArMnW2SzTgRhALdDfksq7qI53x.jpg',
      ingredientes: [
        'Tomate',
        'Mozzarella',
        'Pepperoni',
        'Orégano'
      ]
    },
    {
      id: 2,
      nombre: 'Super Mushroom',
      precio: 11.90,
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxUM3-oI93S9IM-Hohxtfu-6WQaUlx4qL6fwFUymlqCFMzYY7HqCaqdNQ&s=10',
      ingredientes: [
        'Tomate',
        'Mozzarella',
        'Albahaca',
        'Aceite de oliva'
      ]
    },
    {
      id: 3,
      nombre: 'Boss BBQ',
      precio: 13.50,
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNisx-LBc5Vr4vm6RDF0MNjvGPFVDUXWjgBR8mhv4Z5BxmgpTFxm2cbCA&s=10',
      ingredientes: [
        'Pollo',
        'Mozzarella',
        'Cebolla roja',
        'Salsa barbacoa'
      ]
    },
    {
      id: 4,
      nombre: 'Veggie Quest',
      precio: 11.50,
      imagen: 'https://www.seasonsandsuppers.ca/wp-content/uploads/2013/02/roasted-vegetable-pizza-1200-55.jpg',
      ingredientes: [
        'Pimientos',
        'Champiñones',
        'Aceitunas',
        'Mozzarella'
      ]
    },
    {
      id: 5,
      nombre: 'Final Boss',
      precio: 14.50,
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3do17uqLgyy3QW7eXn3WEPB46bquLU534WABcG1bvH2BC-837Cb9Fbfbh&s=10',
      ingredientes: [
        'Doble pepperoni',
        'Bacon',
        'Mozzarella',
        'Salsa picante'
      ]
    },
    {
      id: 6,
      nombre: 'Blue Screen',
      precio: 12.90,
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9K6lAKrhES5ENhsIKOUOUdrZwqG1UWD_4_DRdTAWEJGnRhMBIvZpzSBc&s=10',
      ingredientes: [
        'Jamón cocido',
        'Champiñones',
        'Mozzarella',
        'Tomate'
      ]
    },
    {
      id: 7,
      nombre: 'Coin Collector',
      precio: 13.00,
      imagen: 'https://cdncoin.com/cdn/shop/files/02-Teenage-Mutant-Ninja-Turtles-Pizza-2oz-Silver-Coloured-Coin-StraightOn-LowRes.png?v=1752585275',
      ingredientes: [
        'Jamón serrano',
        'Rúcula',
        'Mozzarella',
        'Tomate'
      ]
    },
    {
      id: 8,
      nombre: 'Game Over',
      precio: 13.90,
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4grCPutBoA4s9gZZi5YL9VUNhojJFaU7v1GaTB7H0S0CwWI__KrtudT0u&s=10',
      ingredientes: [
        'Chorizo',
        'Bacon',
        'Mozzarella',
        'Salsa especial'
      ]
    }
  ];

}

import { Routes } from '@angular/router';
import { PizzaList } from './components/pizza-list/pizza-list';
import { OrderForm } from './components/order-form/order-form';

export const routes: Routes = [
  { path: '', redirectTo: 'listado', pathMatch: 'full' },
  { path: 'listado', component: PizzaList },
  { path: 'pedido', component: OrderForm }
];

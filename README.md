# RetroPizza

Aplicación web de una pizzería hecha con Angular y Bootstrap.

## Qué hace

- **Listado:** muestra las pizzas, permite buscarlas por nombre o ingrediente y añadirlas al pedido indicando la cantidad.
- **Pedido:** muestra las pizzas añadidas con el total, permite quitarlas y completar el pedido con hora, dirección y método de pago (tarjeta o Bizum).
- La barra de navegación muestra el número de pizzas añadidas al pedido.

## Tecnologías

- Angular
- Bootstrap
- Angular Router
- Formularios reactivos

## Estructura

    src/app
    ├── components
    │   ├── navbar
    │   ├── header
    │   ├── footer
    │   ├── pizza-list
    │   ├── pizza-card
    │   └── order-form
    ├── models
    ├── services
    ├── app.routes.ts
    └── app.ts

## Rutas

| Ruta | Componente |
|------|------------|
| `/listado` | PizzaList |
| `/pedido` | OrderForm |

## Cómo ejecutarlo

    npm install
    npm start

Abre http://localhost:4200 en el navegador.

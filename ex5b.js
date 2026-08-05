/*
Enunciado - Mercado del Barrio:

Eres el contador del mercado del barrio y esta tarde debes cerrar la caja.
Tienes un listado de productos en el carrito de la compra, cada uno con su
nombre y su precio. Recorre el array `productos` usando un bucle (sin crear
una función) y suma la propiedad `precio` de cada objeto para obtener el
total de la compra. Guarda el resultado final en la variable `total` y
muéstralo por consola.

Pista: usa un bucle `for` y accede a `productos[i].precio` en cada iteración.
*/
// Array de productos: cada producto tiene nombre y precio
const productos = [
  { nombre: 'Manzanas', precio: 1.2 },
  { nombre: 'Pan', precio: 0.85 },
  { nombre: 'Leche', precio: 1.5 },
  { nombre: 'Huevos', precio: 2.3 },
  { nombre: 'Queso', precio: 3.4 }
];

let total = 0;

for (let i = 0; i < productos.length; i++) {
    // ¿Que hay que hacer dentro del bucle?
}

console.log('Total:', total); // Debería mostrar el total de los precios de todos los productos
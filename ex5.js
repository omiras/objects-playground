/**
 * Fíjate en el siguiente array. Es un array de objetos. Concretamente, de productos de supermercado. Cada producte se compone de un nombre y un precio.
 */

const productos = [
  { nombre: 'Manzanas', precio: 1.2 },
  { nombre: 'Pan', precio: 0.85 },
  { nombre: 'Leche', precio: 1.5 },
  { nombre: 'Huevos', precio: 2.3 },
  { nombre: 'Queso', precio: 3.4 }
];

// Cambia únicamente la línea indicada para obtener el resultado esperado. El primero ya está solucionado.

const precioManzanas = productos[0].precio;
console.log("Precio Manzanas: ", precioManzanas);

const precioLeche = 0; //<-- CAMBIAR
console.log("Precio Leche: ", precioLeche);

const nombreHuevosMayusculas = ""; //<-- CAMBIAR
console.log("Nombre del cuarto producto en mayúsculas: ", nombreHuevosMayusculas);

const precioPanMasManzanas = 0; //<---CAMBIAR
console.log("Suma del precio de Pan + Manzanas: ", precioPanMasManzanas);
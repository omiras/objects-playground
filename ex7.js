/**
 * Obtener la edad de la persona mayor
 * 
 * Recibe dos objetos con propiedades "name" y "age".
 * Devuelve la edad de la persona con mayor edad.
 * Si ambas tienen la misma edad, devuelve cualquier edad.
 * 
 * IMPORTANTE: debes usar la palabra reservada "return" para devolver un número.
 * No es suficiente con usar console.log dentro de la función. Puedes modificar el cuerpo de la función como desees, el código ya existente es una ayuda.
 */

function getOldestAge(person1, person2) {
    let edadMaxima = 0;

    // Completar código

    return edadMaxima;
}

// Ejemplo de uso:
console.log(getOldestAge({ name: "Pedro", age: 30 }, { name: "María", age: 25 })); 
// 30. Porque Pedro es mayor que María

console.log(getOldestAge({ name: "Ana", age: 40 }, { name: "Luis", age: 50 })); 
// 50

console.log(getOldestAge({ name: "Elena", age: 20 }, { name: "Carlos", age: 20 })); 
// 20


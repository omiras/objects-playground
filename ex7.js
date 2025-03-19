/**
 * Obtener la edad de la persona mayor
 * 
 * Recibe dos objetos con propiedades "name" y "age".
 * Devuelve la edad de la persona con mayor edad.
 * Si ambas tienen la misma edad, devuelve esa edad.
 * 
 * IMPORTANTE: debes usar la palabra reservada "return" para devolver un número.
 * No es suficiente con usar console.log dentro de la función.
 */

function getOldestAge(person1, person2) {
    // Con tus palabras, que hay que hacer. Luego, escribir el JavaScript
    // Tengo que mirar si la propiedad 'age' de person1 es mayor que la propiedad 'age' de person2. En tal caso, devolvere el valro de la propiedad 'age' de person1. En caso contrario, devuelvo el valor la propieda 'age' de person2
    let agePerson1 = person1.age;
    let agePerson2 = person2.age;

    if (agePerson1>agePerson2) {
        return agePerson1;
    } else {
        return agePerson2;
    }
}

// Ejemplo de uso:
console.log(getOldestAge({ name: "Pedro", age: 30 }, { name: "María", age: 25 })); 
// 30. Porque Pedro es mayor que María

console.log(getOldestAge({ name: "Ana", age: 40 }, { name: "Luis", age: 50 })); 
// 50

console.log(getOldestAge({ name: "Elena", age: 20 }, { name: "Carlos", age: 20 })); 
// 20


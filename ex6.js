/**
 * Contar cuántos hobbies tiene una persona
 * 
 * Dado un objeto que representa a una persona con una propiedad "hobbies" (un array), 
 * la función debe devolver un number indicando cuántos hobbies tiene.
 */

function countHobbies(person) {
    // Debemos consultar el tamaño de la propiedad hobbies y devolver dicho valor
    let numHobbies = person.hobbies.length;
    return numHobbies;
}

// Ejemplo de uso:
console.log(countHobbies({ nombre: "Carlos", hobbies: ["leer", "correr", "ajedrez"] })); // 3 . Porque la propiedad hobbies tiene 3 elementos
console.log(countHobbies({ nombre: "Ana", hobbies: ["bailar"] })); // 1
console.log(countHobbies({ nombre: "Luis", hobbies: [] })); // 0. Porque la propiedad hobbies no tiene elementos (es un array vacío)

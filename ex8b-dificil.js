/**
 * Contar cuántas personas son de un país determinado
 * 
 * Recibe un array de personas (objetos con propiedad "pais") y un string con el nombre de un país.
 * Devuelve cuántas personas en el array son de ese país.
 */

function countPeopleFromCountry(people, country) {

}

// Ejemplo de uso:
console.log(countPeopleFromCountry([
    { nombre: "Lucía", pais: "España" },
    { nombre: "Juan", pais: "Argentina" },
    { nombre: "Marta", pais: "España" }
], "España")); // 2. Porque existen 2 personas en este array de objetos que son de España

console.log(countPeopleFromCountry([
    { nombre: "Santiago", pais: "Chile" },
    { nombre: "Diego", pais: "Chile" },
    { nombre: "Valeria", pais: "México" }
], "Chile")); // 2

console.log(countPeopleFromCountry([{ nombre: "Laura", pais: "Brasil" }], "Perú")); // 0

/**
 * Modificar un array en un objeto
 */

let estudiante = {
  nombre: "Alba", // string
  conocimientos: ["Trello", "Adobe"], // array de strings
};

/**
 * Alba ha aprendido hace poco a trabajar con CSS. Escribe UNA sentencia JavaScript que modifique la propiedad 'conocimientos'; y añade uno nuevo: 'CSS'
 * 
 * El objeto final debe quedar de esta forma. Haz un console.log del objeto tras modificarlo para comprobar que queda igual que este:
 * 
 {
     nombre: 'Alba',
     conocimientos: ['Trello', 'Adobe', 'CSS']
 }
 * 
 * Pistas:
 * 
 * 1. ¿De tipo de variable es 'conocimientos'?
 * 2. ¿Cuál es el método para añadir un nuevo elemento a un array? push, shift
 */
estudiante.conocimientos.push("CSS");
console.log(estudiante);
estudiante.conocimientos.push("JavaScript");
console.log(estudiante);

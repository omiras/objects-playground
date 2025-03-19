let estudiante = {
    nombre: "Alba",
    conocimientos: ["Trello", "Adobe"],
    mascota: {
        nombre: "Bigotes",
        tipo: "Gato",
        color: {
          pelo: "negro",
          ojos: "grises"
        }
    }
  };

/**
 * Nuestra estudiante Alba ha adoptado una mascota.
 * 
 * Escribe una sentencia JavaScript que permita mostrar el nombre de su mascota por console.log
 */

console.log(estudiante.mascota.nombre);

// Color del pelo de la mascota

console.log(estudiante.mascota.color.pelo);

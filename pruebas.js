"use strict";

const resultados = document.querySelector("#resultados");
const resumen = document.querySelector("#resumen");
const logs = window.__exerciseLogs || [];
const id = document.body.dataset.ejercicio;

const ejercicios = {
  ex1: [{ caso: "console.log(vacuna.efectividad)", esperado: "95", ejecutar: () => logs.find(x => x.length === 1)?.[0] }],
  ex1a: [{ caso: "persona", esperado: { nombre: "Ana", apellidos: "García", edad: 25, hobbies: ["leer", "nadar"] }, ejecutar: () => persona, comparar: recibido => recibido && typeof recibido.nombre === "string" && typeof recibido.apellidos === "string" && typeof recibido.edad === "number" && Array.isArray(recibido.hobbies) }],
  ex2: [{ caso: "persona.apellidos", esperado: "Rudolph", ejecutar: () => persona.apellidos }],
  ex3: [{ caso: "estudiante.conocimientos", esperado: ["Trello", "Adobe", "CSS"], ejecutar: () => estudiante.conocimientos }],
  ex4: [{ caso: "console.log(estudiante.mascota.nombre)", esperado: "Bigotes", ejecutar: () => logs.find(x => x.length === 1)?.[0] }],
  ex5: [
    { caso: "precioLeche", esperado: 1.5, ejecutar: () => precioLeche },
    { caso: "nombreHuevosMayusculas", esperado: "HUEVOS", ejecutar: () => nombreHuevosMayusculas },
    { caso: "precioPanMasManzanas", esperado: 2.05, ejecutar: () => precioPanMasManzanas }
  ],
  ex5b: [{ caso: "total del carrito", esperado: 9.25, ejecutar: () => total }],
  ex6: [
    { caso: 'countHobbies({ hobbies: ["leer", "correr", "ajedrez"] })', esperado: 3, ejecutar: () => countHobbies({ hobbies: ["leer", "correr", "ajedrez"] }) },
    { caso: "countHobbies({ hobbies: [] })", esperado: 0, ejecutar: () => countHobbies({ hobbies: [] }) }
  ],
  ex7: [
    { caso: "getOldestAge({ age: 40 }, { age: 20 })", esperado: 40, ejecutar: () => getOldestAge({ age: 40 }, { age: 20 }) },
    { caso: "getOldestAge({ age: 20 }, { age: 40 })", esperado: 40, ejecutar: () => getOldestAge({ age: 20 }, { age: 40 }) },
    { caso: "getOldestAge({ age: 20 }, { age: 20 })", esperado: 20, ejecutar: () => getOldestAge({ age: 20 }, { age: 20 }) }
  ],
  ex8: [
    { caso: "detectPureColor({ r: 255, g: 0, b: 0 })", esperado: "red", ejecutar: () => detectPureColor({ r: 255, g: 0, b: 0 }) },
    { caso: "detectPureColor({ r: 0, g: 255, b: 0 })", esperado: "green", ejecutar: () => detectPureColor({ r: 0, g: 255, b: 0 }) },
    { caso: "detectPureColor({ r: 0, g: 0, b: 255 })", esperado: "blue", ejecutar: () => detectPureColor({ r: 0, g: 0, b: 255 }) },
    { caso: "detectPureColor({ r: 255, g: 255, b: 0 })", esperado: "", ejecutar: () => detectPureColor({ r: 255, g: 255, b: 0 }) },
    { caso: "detectPureColor({ r: 1, g: 2, b: 3 })", esperado: "", ejecutar: () => detectPureColor({ r: 1, g: 2, b: 3 }) }
  ],
  "ex8b-dificil": [
    { caso: 'countPeopleFromCountry([{ pais: "España" }, { pais: "Chile" }, { pais: "España" }], "España")', esperado: 2, ejecutar: () => countPeopleFromCountry([{ pais: "España" }, { pais: "Chile" }, { pais: "España" }], "España") },
    { caso: 'countPeopleFromCountry([{ pais: "Chile" }], "España")', esperado: 0, ejecutar: () => countPeopleFromCountry([{ pais: "Chile" }], "España") }
  ],
  ex9: [{ caso: "estudiante.aprender(\"HTML\")", esperado: ["HTML"], ejecutar: () => estudiante.conocimientos }],
  ex9b: [
    { caso: "modelo del robot", esperado: "XR-500", ejecutar: () => logs.find(x => x.includes("XR-500"))?.[1] },
    { caso: "peso del robot en la Luna", esperado: 24.75, ejecutar: () => logs.find(x => x.includes(24.75))?.[1] },
    { caso: "nivel de batería tras cargar 500", esperado: 4000, ejecutar: () => robot.batería.nivelActual },
    { caso: "robot encendido", esperado: true, ejecutar: () => robot.encendido },
    { caso: "robot realiza la tarea caminar", esperado: true, ejecutar: () => logs.some(x => String(x[0]).includes("está realizando la tarea: caminar")) }
  ]
};

let aciertos = 0;
const pruebas = ejercicios[id] || [];
pruebas.forEach((prueba, indice) => {
  try {
    const recibido = prueba.ejecutar();
    const correcto = prueba.comparar ? prueba.comparar(recibido) : JSON.stringify(recibido) === JSON.stringify(prueba.esperado);
    if (correcto) aciertos++;
    mostrar(`Prueba ${indice + 1} · ${prueba.caso}: se espera ${formatear(prueba.esperado)}. Se obtuvo ${formatear(recibido)}. ${correcto ? "Correcta." : "Revisa este caso."}`, correcto);
  } catch (error) {
    mostrar(`Prueba ${indice + 1} · ${prueba.caso}: se espera ${formatear(prueba.esperado)}. Error: ${error.message}. Revisa este caso.`, false);
  }
});
resumen.textContent = `${aciertos} de ${pruebas.length} pruebas correctas.`;

function mostrar(texto, correcto) {
  const item = document.createElement("li");
  item.className = correcto ? "bien" : "mal";
  item.textContent = texto;
  resultados.append(item);
}

function formatear(valor) {
  return valor === undefined ? "undefined" : JSON.stringify(valor);
}

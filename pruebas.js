(() => {
  const id = document.body.dataset.ejercicio;
  const salida = document.querySelector('#resultados');
  const resumen = document.querySelector('#resumen');
  const logs = window.__exerciseLogs || [];
  const pruebas = {
    ex1: [['Muestra solo 95', () => logs.some(x => x.length === 1 && x[0] === '95')]],
    ex1a: [['Objeto personal con cuatro propiedades', () => typeof persona === 'object' && persona !== null && typeof persona.nombre === 'string' && typeof persona.apellidos === 'string' && typeof persona.edad === 'number' && Array.isArray(persona.hobbies)]],
    ex2: [['Apellido actualizado', () => persona.apellidos === 'Rudolph']],
    ex3: [['CSS añadido al final', () => estudiante.conocimientos.join(',') === 'Trello,Adobe,CSS']],
    ex4: [['Muestra solo Bigotes', () => logs.some(x => x.length === 1 && x[0] === 'Bigotes')]],
    ex5: [['Precio de la leche', () => precioLeche === 1.5], ['Huevos en mayúsculas', () => nombreHuevosMayusculas === 'HUEVOS'], ['Suma de los precios', () => precioPanMasManzanas === 2.05]],
    ex5b: [['Total del carrito', () => total === 9.25]],
    ex6: [['Tres hobbies', () => countHobbies({hobbies:['a','b','c']}) === 3], ['Ningún hobby', () => countHobbies({hobbies:[]}) === 0]],
    ex7: [['Primera persona mayor', () => getOldestAge({age:40},{age:20}) === 40], ['Segunda persona mayor', () => getOldestAge({age:20},{age:40}) === 40], ['Empate', () => getOldestAge({age:20},{age:20}) === 20]],
    ex8: [['Rojo', () => detectPureColor({r:255,g:0,b:0}) === 'red'], ['Verde', () => detectPureColor({r:0,g:255,b:0}) === 'green'], ['Azul', () => detectPureColor({r:0,g:0,b:255}) === 'blue'], ['Mezcla', () => detectPureColor({r:255,g:255,b:0}) === ''], ['Otro color', () => detectPureColor({r:1,g:2,b:3}) === '']],
    'ex8b-dificil': [['Dos coincidencias', () => countPeopleFromCountry([{pais:'España'},{pais:'Chile'},{pais:'España'}],'España') === 2], ['Sin coincidencias', () => countPeopleFromCountry([{pais:'Chile'}],'España') === 0]],
    ex9: [['El estudiante aprende HTML', () => estudiante.conocimientos.length === 1 && estudiante.conocimientos[0] === 'HTML']],
    ex9b: [['Modelo, color y peso', () => logs.some(x=>x.includes('XR-500')) && logs.some(x=>x.includes('Plateado')) && logs.some(x=>x.includes(24.75))], ['Batería, herramientas y movimientos', () => logs.some(x=>x.includes(3500)) && logs.some(x=>x.includes(3)) && logs.some(x=>x.includes(false))], ['Métodos del robot', () => robot.encendido === true && robot.batería.nivelActual === 4000 && logs.some(x=>String(x[0]).includes('caminar'))]]
  }[id] || [];
  let aciertos=0;
  for(const [nombre,probar] of pruebas){
    let correcto=false;
    try{correcto=probar()}catch(error){/* La solución aún puede estar incompleta. */}
    if(correcto)aciertos++;
    const li=document.createElement('li');
    li.className=correcto?'bien':'mal';
    li.textContent=`${correcto?'✓':'✗'} ${nombre}`;
    salida.append(li);
  }
  resumen.textContent=`${aciertos} de ${pruebas.length} pruebas correctas.`;
})();

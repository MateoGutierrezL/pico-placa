const restricciones = {
  medellin: {
    lunes: [3, 4],
    martes: [2, 8],
    miercoles: [9, 5],
    jueves: [1, 7],
    viernes: [0, 6],
  },
  bello: {
    lunes: [1, 7],
    martes: [0, 3],
    miercoles: [4, 6],
    jueves: [5, 9],
    viernes: [2, 8],
  },
  itagui: {
    lunes: [1, 7],
    martes: [3, 0],
    miercoles: [6, 4],
    jueves: [5, 9],
    viernes: [8, 2],
  },
  la_estrella: {
    lunes: [3, 4],
    martes: [2, 8],
    miercoles: [5, 9],
    jueves: [1, 7],
    viernes: [0, 6],
  },
  copacabana: {
    lunes: [5, 9],
    martes: [1, 4],
    miercoles: [2, 0],
    jueves: [3, 6],
    viernes: [7, 9],
  },
  envigado: {
    lunes: [6, 9],
    martes: [5, 7],
    miercoles: [5, 9],
    jueves: [1, 7],
    viernes: [0, 6],
  },
  caldas: {
    lunes: [6, 9],
    martes: [5, 7],
    miercoles: [1, 8],
    jueves: [0, 2],
    viernes: [3, 4],
  },
  girardota: {
    lunes: [6, 9],
    martes: [5, 7],
    miercoles: [5, 9],
    jueves: [1, 7],
    viernes: [0, 6],
  },
  barbosa: {
    lunes: [6, 9],
    martes: [5, 7],
    miercoles: [5, 9],
    jueves: [1, 7],
    viernes: [0, 6],
  },
 
  
};

document.getElementById('consultaForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const municipio = document.getElementById('municipio').value;
  const dia = document.getElementById('dia').value;
  const digito = parseInt(document.getElementById('digito').value);

  const resultado = document.getElementById('resultado');

  if (!restricciones[municipio] || !restricciones[municipio][dia]) {
    resultado.textContent = "Datos no válidos o día no cubierto.";
    resultado.style.color = "red";
  }

  const restriccionHoy = restricciones[municipio][dia];

  if (restriccionHoy.includes(digito)) {
    resultado.textContent = `¡Atención! Hoy tiene Pico y Placa (${digito}) en ${municipio.toUpperCase().replace(/_/g, " ")}.`;
    resultado.style.color = "red";
  } else {
    resultado.textContent = `Puede circular sin restricción. (${digito}) no está restringido hoy.`;
    resultado.style.color = "green";
  }
});

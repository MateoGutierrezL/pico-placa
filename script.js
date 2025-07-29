const restricciones = {
  medellin: {
    lunes: [0, 1],
    martes: [2, 3],
    miercoles: [4, 5],
    jueves: [6, 7],
    viernes: [8, 9],
  },
  bello: {
    lunes: [1, 2],
    martes: [3, 4],
    miercoles: [5, 6],
    jueves: [7, 8],
    viernes: [9, 0],
  },
  itagui: {
    lunes: [2, 3],
    martes: [4, 5],
    miercoles: [6, 7],
    jueves: [8, 9],
    viernes: [0, 1],
  }
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
    return;
  }

  const restriccionHoy = restricciones[municipio][dia];

  if (restriccionHoy.includes(digito)) {
    resultado.textContent = `¡Atención! Hoy tiene Pico y Placa (${digito}) en ${municipio.toUpperCase()}.`;
    resultado.style.color = "red";
  } else {
    resultado.textContent = `Puede circular sin restricción. (${digito}) no está restringido hoy.`;
    resultado.style.color = "green";
  }
});

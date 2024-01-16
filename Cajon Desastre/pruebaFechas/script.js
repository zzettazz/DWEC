var fechaActual = new Date();

var fechaNacimiento = new Date("2004-12-21");

var diferenciaMiliseg = fechaActual.getTime() - fechaNacimiento.getTime();

const milisegundosEnAnyo = 1000 * 60 * 60 * 24 * 365.25;

var diferencia = Math.floor(diferenciaMiliseg / milisegundosEnAnyo);

console.log("Tienes "+diferencia+" años");
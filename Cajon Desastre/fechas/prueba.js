function calcularEdad(edadEntrada)
{
    var fechaActual = new Date();
    var fechaNacimiento = new Date(miFecha);

    var diferencia = fechaActual - fechaNacimiento;

    var edadEnMilisegundos = new Date(diferencia);
    var edad = Math.abs(edadEnMilisegundos.getUTCFullYear() - 1970);
    return edad;
}

var miFecha = "1990-05-15";

var edadActual = calcularEdad(miFecha);
console.log("Edad: " + edadActual);
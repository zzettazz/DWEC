/*
var miCadena = "12345678X";
var expresionRegular = /[0-9]{8}[a-zA-Z]{1}/;

if (cadenaValida(miCadena)) console.log("La cadena es válida");
else console.log("La cadena NO ES válida");

function cadenaValida(cadena)
{
    return (expresionRegular.test(miCadena) && cadena.length == 9);
}

var miHora = "12:12:40";
var miExpresionRegularHoras = /[0-5][0-9]:[0-5][0-9]:[0-5][0-9]/;

if (horaValida(miHora)) console.log("Hora válida");
else console.log("Hora NO VÁLIDA");

function horaValida(hora)
{
    return (miExpresionRegularHoras.test(hora) && hora.length == 8);
}
*/
var miFecha = "1-5-2004";
var miExpresionFecha = /(0?[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0?[1-9]|1[1-2])\/[1-2][0-9]{3}|(0?[1-9]|1[0-9]|2[0-9]|3[0-1])-(0?[1-9]|1[1-2])-[1-2][0-9]{3}/;

if (fechaValida(miFecha)) console.log("Fecha válida");
else console.log("Fecha NO VÁLIDA");

function fechaValida(fecha)
{
    return (miExpresionFecha.test(fecha) && (fecha.length >= 8 && fecha.length <= 10))
}
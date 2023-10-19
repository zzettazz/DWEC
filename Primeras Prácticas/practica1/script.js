//CUANDO SE CANCELA EN UN PROMPT EL VALOR = NULL

var nombreDefinitivo = false;
var debug = false;
var nombrePorDefecto = "Mi Nombre";

while (nombreDefinitivo == false)
{
    var nombre = prompt("Introduce tu nombre:",nombrePorDefecto);
    if (debug == true) console.log("Nombre: "+nombre);
    if (nombre == nombrePorDefecto || nombre == "" || nombre == null) alert("No puedes dejar el nombre en blanco")
    else
    {
        var confirma = confirm("Usted ha introducido: \""+nombre+"\" , ¿Es correcto?")
        if (debug == true) console.log("Confirmación: "+confirma);
        nombreDefinitivo = confirma
        if (debug == true) console.log("Nombre definitivo: "+nombreDefinitivo);
    }
}
alert("Bienvenido "+nombre);

document.write("<br/>Bienvenido "+nombre);
 
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
options.timeZone = 'UTC';
options.timeZoneName = 'short';
 
var today = new Date();
var now = today.toLocaleString('es-ES', options);

document.write("<br/>Hoy es: "+now)

// BOTONES
//document.write("<input type='button' value='Aceptar'/>");
//document.write("<input type='button' value='Cancelar'/>");

//Para introducir datos desde una ventana de alerta
//var texto = prompt("Intro")

function sumar()
{    
    var primerNumero = document.getElementById("texto1").value;
    var segundoNumero = document.getElementById("texto2").value;
    if (primerNumero.includes(",")) primerNumero = primerNumero.replace(",",".");
    if (segundoNumero.includes(",")) segundoNumero = segundoNumero.replace(",",".");
    primerNumero = Number(primerNumero);
    segundoNumero = Number(segundoNumero);
    var suma = primerNumero + segundoNumero;
    var restante = "Resultado: ".concat(suma);
    document.getElementById('suma').innerHTML=restante;
}
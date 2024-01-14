// DEBES USAR CADA DIV RESPECTIVAMENTE en todo momento

// Ejercicio 1
// Sacar la fecha Actual por consola
var fechaActual = new Date();
console.log(fechaActual);

// Ejercicio 2
// Sacar por pantalla una frase que diga "Hoy es dd/MM/yyyy y son las HH:mm"
// PISTA: usar las funciones predeterminadas de JS
// PISTA 2: Hay que sumarle +1 a los meses, razona por qué
var fechaFormato = ("Hoy es "+fechaActual.getDate()+
"/"+(fechaActual.getMonth()+1)+
"/"+fechaActual.getFullYear()+
" y son las "+fechaActual.getHours()+
":"+fechaActual.getMinutes());

document.getElementById("ejercicio2").innerHTML = fechaFormato;

// Ejercicio 3
// Hacer un input type text y un botón que al pulasrlo ponga la fecha actual en el recuadro de texto
var input = "<input type='text' id='miInput'/>";
var boton = "<button onclick='ponerFecha()'>Botón</button>";

document.getElementById("ejercicio3").innerHTML = input + boton

function ponerFecha()
{
    document.getElementById("miInput").value = fechaFormato;
}

// Ejercicio 4
// Hacer un reloj (que se actualiza cada segundo) EN H2, que diga horas, minutos y segundos (Ejemplo 12:12:12)
// PISTA: será necesario usar intervalos (var miIntervalo = setInterval()), en caso necesario mira esto: https://developer.mozilla.org/es/docs/Web/API/setInterval

// Podemos llamar a la función y luego hacer le intervalo porque cuando se hace el intervalo tiene que pasar X hasta que empieza,
// por eso le llamamo y luego al segundo siguiente, ya ha empezado el intervalo
actualizarReloj();

var intervalo;

intervalo = setInterval(actualizarReloj,1000)

function actualizarReloj()
{
    var fecha = new Date();

    var horas = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();

    document.getElementById("ejercicio4").innerHTML = ("<h2>"+horas+":"+minutos+":"+segundos+"</h2>");
}

// Ejercicio 5
// Saca por pantalla un número aleatorio POSITIVO y luego redondélo hacia arriba, y después hacia abajo (Debes sacar por pantalla los 3 números)
var miNumero = Math.random();
var numeroArriba = Math.ceil(miNumero);
var numeroAbajo = Math.floor(miNumero);

document.getElementById("ejercicio5").innerHTML = "NUM: "+miNumero+"<br/>NUM ABAJO: "+numeroAbajo+"<br/>NUM ARRIBA: "+numeroArriba;


// Ejercicio 6
// Crear un número aleatorio y déjale solo 1 decimal, después haz una función que compruebe si es un número o no
// Si lo ves necesario, saca el valor de la función (true o false) por pantalla
var numAleatorio = Math.random();

comprobarNUM();

function comprobarNUM()
{
    document.getElementById("ejercicio6").innerHTML = isNaN(numAleatorio);
}

// Ejercicio 7
// Con la cadena proporcionada separa el nombre y los apellidos, y después pon la primera letra de las 3 palabras en mayúscula
var nombre = "antoniogarcíarodriguez";

var nom = nombre.substring(0, 7);
nom = nom.charAt(0).toUpperCase()+nom.slice(1);
var apellido1 = nombre.substring(7, 13);
apellido1 = apellido1.charAt(0).toUpperCase()+apellido1.slice(1);
var apellido2 = nombre.substring(13, nombre.length);
apellido2 = apellido2.charAt(0).toUpperCase()+apellido2.slice(1);

document.getElementById("ejercicio7").innerHTML = nom+" "+apellido1+" "+apellido2;



// Ejercicio 8
// Crea un botón que abra una nueva ventana y escríbele dentro el código HTML proporcionado
var codigoHTML = ""+
"<table border>" +
    "<tr>"+
        "<th>Artículo</th>"+
        "<th>Precio</th>"+
    "</tr>"+
    "<tr>"+
        "<td>Bañador</td>"+
        "<td>5.75€</td>"+
    "</tr>"+
    "<tr>"+
        "<td>Manguitos</td>"+
        "<td>7.45€</td>"+
    "</tr>"+
"</table";

var botonVentana = "<button onclick='abrirVentana()'>Abrir ventana</button>";
document.getElementById("ejercicio8").innerHTML = botonVentana;

function abrirVentana()
{
    var miVentana = window.open("","Mi Titulo", "height=500px,width=1000px");
    miVentana.document.write(codigoHTML);
}
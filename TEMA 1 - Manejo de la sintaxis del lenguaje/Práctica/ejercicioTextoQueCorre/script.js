var cadena = "HOLA";
var intervalo;

document.getElementById("texto").innerHTML=cadena;

intervalo = setInterval(cambiarTexto,1000);

function cambiarTexto()
{
    console.log(cadena);
    
    var ultimoCaracter = cadena.charAt(cadena.length - 1);
    var nuevaCadena = ultimoCaracter.concat(cadena);
    var nuevaCadena = nuevaCadena.substring(0,cadena.length);

    document.getElementById("texto").innerHTML=nuevaCadena;
    cadena = nuevaCadena;
}
var intervalo;

var cadenaAlmacenada = "";

var segundos = 0;

function girarDerecha()
{
    cadenaAlmacenada = document.getElementById("textoIntroducido").value;
    // EJECUTAMOS PRIMERO LA FUNCIÓN PORQUE DESDE QUE SE ACTIVA EL INTERVALO
    // HASTA QUE EJECUTA LA FUNCIÓN PASA LA CANTIDAD DE SEGUNDOS INDICADA
    realizarGiroDerecha();
    // Y AHORA SI HACEMOS EL INTERVALO

    if (intervalo == null)
    {
        intervalo = setInterval(realizarGiroDerecha,1000);
    }
    else 
    {
        clearInterval(intervalo);
        intervalo = setInterval(realizarGiroDerecha,1000);
    }
}

function girarIzquierda()
{
    cadenaAlmacenada = document.getElementById("textoIntroducido").value;
    // EJECUTAMOS PRIMERO LA FUNCIÓN PORQUE DESDE QUE SE ACTIVA EL INTERVALO
    // HASTA QUE EJECUTA LA FUNCIÓN PASA LA CANTIDAD DE SEGUNDOS INDICADA
    realizarGiroIzquierda();
    // Y AHORA SI HACEMOS EL INTERVALO

    if (intervalo == null)
    {
        intervalo = setInterval(realizarGiroIzquierda,1000);
    }
    else 
    {
        clearInterval(intervalo);
        intervalo = setInterval(realizarGiroIzquierda,1000);
    }
}

function realizarGiroDerecha()
{
    var ultimoCaracter = cadenaAlmacenada.charAt(cadenaAlmacenada.length-1);
    var cadenaConcatenada = ultimoCaracter.concat(cadenaAlmacenada)
    var cadenaRecortada = cadenaConcatenada.substring(0,(cadenaConcatenada.length-1));
    cadenaAlmacenada = cadenaRecortada;
    document.getElementById("resultado").innerHTML=formatearTexto(cadenaAlmacenada);
}

function realizarGiroIzquierda()
{
    var primerCaracter = cadenaAlmacenada.charAt(0);
    var cadenaConcatenada = cadenaAlmacenada.concat(primerCaracter);
    var cadenaRecortada = cadenaConcatenada.substring(1,(cadenaConcatenada.length));
    cadenaAlmacenada = cadenaRecortada;
    document.getElementById("resultado").innerHTML=formatearTexto(cadenaAlmacenada);
}

function segundosIzquierda()
{
    segundos = Number(document.getElementById("segundosActivo").value);

    cadenaAlmacenada = document.getElementById("textoIntroducido").value;
    // EJECUTAMOS PRIMERO LA FUNCIÓN PORQUE DESDE QUE SE ACTIVA EL INTERVALO
    // HASTA QUE EJECUTA LA FUNCIÓN PASA LA CANTIDAD DE SEGUNDOS INDICADA
    realizarGiroIzquierda();
    // Y AHORA SI HACEMOS EL INTERVALO

    if (intervalo == null)
    {
        intervalo = setInterval(realizarGiroIzquierdaPorSegundos,1000);
    }
    else 
    {
        clearInterval(intervalo);
        intervalo = setInterval(realizarGiroIzquierdaPorSegundos,1000);
    }
}

function segundosDerecha()
{
    segundos = Number(document.getElementById("segundosActivo").value);

    cadenaAlmacenada = document.getElementById("textoIntroducido").value;
    // EJECUTAMOS PRIMERO LA FUNCIÓN PORQUE DESDE QUE SE ACTIVA EL INTERVALO
    // HASTA QUE EJECUTA LA FUNCIÓN PASA LA CANTIDAD DE SEGUNDOS INDICADA
    realizarGiroDerecha();
    // Y AHORA SI HACEMOS EL INTERVALO

    if (intervalo == null)
    {
        intervalo = setInterval(realizarGiroDerechaPorSegundos,1000);
    }
    else 
    {
        clearInterval(intervalo);
        intervalo = setInterval(realizarGiroDerechaPorSegundos,1000);
    }
}


function realizarGiroIzquierdaPorSegundos()
{
    if (segundos > 0)
    {
        realizarGiroIzquierda();
        segundos = segundos - 1;
    }
    else
    {
        pararIntervalo();
    }
}

function realizarGiroDerechaPorSegundos()
{
    if (segundos > 0)
    {
        realizarGiroDerecha();
        segundos = segundos - 1;
    }
    else
    {
        pararIntervalo();
    }
}


// FUNCIONES DE UTILIDAD

function formatearTexto(texto)
{
    return "<h1>"+texto+"</h1>";
}

function pararIntervalo()
{
    clearInterval(intervalo);
    intervalo = null;
}
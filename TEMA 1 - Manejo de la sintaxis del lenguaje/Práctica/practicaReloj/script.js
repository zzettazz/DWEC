var millisecondsToWait = 1000;
var intervalo;

function iniciar()
{
    desHabilitarBoton("iniciar");
    habilitarBoton("parar");
    actualizaReloj();
    intervalo = setInterval(actualizaReloj,1000);
}

function actualizaReloj()
{
    var horas = "";
    var minutos = "";
    var segundos ="";
    
    var hoy = new Date();

    horas = obtenerHoras(hoy);
    minutos = obtenerMinutos(hoy);
    segundos = obtenerSegundos(hoy);

    var textoAMostrar = "<h3>"+horas+":"+minutos+":"+segundos+"</h3>";

    document.getElementById("div1").innerHTML=textoAMostrar;
}

function parar()
{
    clearInterval(intervalo);
    habilitarBoton("iniciar")
    desHabilitarBoton("parar");
}

function habilitarBoton(boton)
{
    document.getElementById(boton).disabled = false;
}

function desHabilitarBoton(boton)
{
    document.getElementById(boton).disabled = true;
}

function obtenerHoras(hoy)
{
    var horas = "";
    var hora = hoy.getHours();

    if (hora < 10)
    {
        horas = "0".concat(hora.toString());
    }
    else horas = hora.toString();

    return horas;
}

function obtenerMinutos(hoy)
{
    var minutos = "";
    var minuto = hoy.getMinutes();

    if (minuto < 10)
    {
        minutos = "0"+minuto.toString();
    }
    else minutos = minuto.toString();

    return minutos;
}

function obtenerSegundos(hoy)
{
    var segundos = "";
    var segundo = hoy.getSeconds();

    if (segundo < 10)
    {
        segundos = "0"+segundo.toString();
    }
    else segundos = segundo.toString();
    
    return segundos;
}
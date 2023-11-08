var arrayNumeros = [1,45,46,13,3];
var indiceActual = 0;
var posicionActual = 0;

generarRespuesta(indiceActual,posicionActual);

function cambiarPosicion(posicion)
{
    if (posicion == "primera")
    {
        var indice = 0;
        var posicionArray = arrayNumeros[indice];
        indiceActual = indice;
        posicionActual = posicionArray;

        generarRespuesta(indice,posicionArray);
    }
    else if (posicion == "ultima")
    {
        var indice = (arrayNumeros.length-1);
        var posicionArray = arrayNumeros[indice];
        indiceActual = indice;
        posicionActual = posicionArray;

        generarRespuesta(indice,posicionArray);
    }
    else if (posicion == "anterior")
    {
        var indice = (indiceActual-1);
        if (indice >= 0)
        {
            var posicionArray = arrayNumeros[indice];
            indiceActual = indice;
            posicionActual = posicionArray;

            generarRespuesta(indice,posicionArray);
        }
    }
    else if (posicion == "siguiente")
    {
        var indice = (indiceActual+1);
        if (indice <= (arrayNumeros.length-1))
        {
            var posicionArray = arrayNumeros[indice];
            indiceActual = indice;
            posicionActual = posicionArray;

            generarRespuesta(indice,posicionArray);
        }
    }
}

function generarRespuesta(indice,posicionArray)
{
    var miRespuesta = arrayNumeros;

    miRespuesta += " indice: "+indice;
    miRespuesta += " posición: "+posicionArray;

    miRespuesta += "<br/><br/>";

    miRespuesta += "<h3>ORDEN ASCENDENTE</h3>";
    var arrayAscentente = arrayNumeros.sort((a, b) => a - b);
    miRespuesta+= arrayAscentente

    miRespuesta += "<br/><br/>";

    miRespuesta += "<h3>ORDEN DESCENDENTE</h3>"
    var arrayDescendente = arrayNumeros.sort((a, b) => b - a);
    miRespuesta += arrayDescendente;

    document.getElementById("respuesta").innerHTML = miRespuesta;
    document.getElementById("numeroTexto").value = "";
}

function realizarAccion(accion)
{
    var numeroRecogido = parseInt(document.getElementById("numeroTexto").value);
    
    if (numeroRecogido != NaN)
    {
        if (accion == "alta")
        {
            arrayNumeros.push(numeroRecogido);
            generarRespuesta(indiceActual,posicionActual);
        }
        else if (accion == "baja")
        {
            arrayNumeros = arrayNumeros.filter(elemento => elemento != numeroRecogido);
            generarRespuesta(indiceActual,posicionActual);
        }
        else if (accion == "modificacion")
        {

        }
        else if (accion == "listado")
        {
            generarTabla();
        }
    }
    else
    {
        alert("Debes introducir un número");
    }
}

function generarTabla()
{
    var tabla = "<table border><tr><td>Indice</td><td>Posición</td></tr>";

    for (var i = 0; i < arrayNumeros.length; i++)
    {
        tabla += "<tr><td>"+i+"</td><td>"+arrayNumeros[i]+"</td></tr>";
    }

    document.getElementById("respuesta").innerHTML = tabla;
}
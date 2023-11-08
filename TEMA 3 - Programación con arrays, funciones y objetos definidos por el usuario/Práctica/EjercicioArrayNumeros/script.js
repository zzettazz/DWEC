var arrayNumeros = [1,45,46,13,3];
var posicionActual;

generarRespuesta(0,1);

function cambiarPosicion(posicion)
{
    if (posicion == "primera")
    {
        var indice = 0;
        var posicionArray = arrayNumeros[indice];
        posicionActual = indice;

        generarRespuesta(indice,posicionArray);
    }
    else if (posicion == "ultima")
    {
        var indice = (arrayNumeros.length-1);
        var posicionArray = arrayNumeros[indice];
        posicionActual = indice;

        generarRespuesta(indice,posicionArray);
    }
    else if (posicion == "anterior")
    {
        var indice = (posicionActual-1);
        if (indice >= 0)
        {
            var posicionArray = arrayNumeros[indice];
            posicionActual = indice;

            generarRespuesta(indice,posicionArray);
        }
    }
    else if (posicion == "siguiente")
    {
        var indice = (posicionActual+1);
        if (indice <= (arrayNumeros.length-1))
        {
            var posicionArray = arrayNumeros[indice];
            posicionActual = indice;

            generarRespuesta(indice,posicionArray);
        }
    }
}

function generarRespuesta(indice,posicionArray)
{
    var miRespuesta = arrayNumeros.join(",");

    miRespuesta += " indice: "+indice;
    miRespuesta += " posición: "+posicionArray;

    document.getElementById("array").innerHTML = miRespuesta;
}
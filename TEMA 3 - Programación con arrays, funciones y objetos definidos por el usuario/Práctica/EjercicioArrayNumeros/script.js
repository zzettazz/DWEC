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
    var arrayAscentente = arrayNumeros.slice();
    arrayAscentente.sort((a, b) => a - b);
    miRespuesta+= arrayAscentente

    miRespuesta += "<br/><br/>";

    miRespuesta += "<h3>ORDEN DESCENDENTE</h3>";
    var arrayDescendente = arrayNumeros.slice();
    arrayDescendente.sort((a, b) => b - a);
    miRespuesta += arrayDescendente;

    document.getElementById("respuesta").innerHTML = miRespuesta;
    document.getElementById("numeroTexto").value = "";
}

function realizarAccion(accion)
{
    var numeroRecogido = document.getElementById("numeroTexto").value;
    
    if (!isNaN(numeroRecogido))
    {
        if (accion == "alta")
        {
            console.log("Accion: alta");
            arrayNumeros.push(parseInt(numeroRecogido));
            generarRespuesta(indiceActual,posicionActual);
        }
        else if (accion == "baja")
        {
            console.log("Accion: Baja");

            var esUltimo = false;
            var esPrimero = false;

            if (indiceActual == (arrayNumeros.length-1)) esUltimo = true;
            else if (indiceActual == 0) esPrimero = true;

            arrayNumeros = arrayNumeros.filter(elemento => elemento != numeroRecogido);
            if (esUltimo)
            {
                indiceActual = (arrayNumeros.length-1);
                posicionActual = arrayNumeros[indiceActual];
            }
            else if (esPrimero)
            {
                indiceActual = 0;
                posicionActual = arrayNumeros[indiceActual];
            }

            generarRespuesta(indiceActual,posicionActual);
        }
        else if (accion == "modificacion")
        {            
            console.log("Accion: Modificación");
            if (arrayNumeros.includes(parseInt(numeroRecogido)))
            {
                console.log("El número '"+parseInt(numeroRecogido)+"' existe");
                document.getElementById("cajasTexto").innerHTML = "<h2>Número: <input type=\"text\" id=\"numeroTexto\" placeholder=\"Introduzca un número\" disabled /></h2>"+
                "<h2>Nuevo Número: <input type=\"text\" id=\"numeroTextoNuevo\" placeholder=\"Introduzca un número\"/></h2><br/>"+
                "<input type=\"button\" value=\"Confirmar modificacion\" onclick=\"confirmarModificacion()\"/>";
                document.getElementById("numeroTexto").value = numeroRecogido;

                document.getElementById("botones").innerHTML = "<input type=\"button\" value=\"Primera\" onclick=\"cambiarPosicion('primera')\" disabled />"+
                "<input type=\"button\" value=\"&lt;&lt; Anterior\" onclick=\"cambiarPosicion('anterior')\" disabled />"+
                "<input type=\"button\" value=\"Siguiente &gt;&gt;\" onclick=\"cambiarPosicion('siguiente')\" disabled />"+
                "<input type=\"button\" value=\"Última\" onclick=\"cambiarPosicion('ultima')\" disabled />"+
                "<br/><br/>"+
                "<input type=\"button\" value=\"Alta\" onclick=\"realizarAccion('alta')\" disabled />"+
                "<input type=\"button\" value=\"Baja\" onclick=\"realizarAccion('baja')\" disabled />"+
                "<input type=\"button\" value=\"Modificación\" onclick=\"realizarAccion('modificacion')\" disabled />"+
                "<input type=\"button\" value=\"Listado\" onclick=\"realizarAccion('listado')\" disabled />";
            }
            else
            {
                document.getElementById("numeroTexto").value = "";
                console.log("El número '"+parseInt(numeroRecogido)+"' no existe");
            }
        }
        else if (accion == "listado")
        {
            console.log("Accion: Litado");
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

function confirmarModificacion()
{
    var numeroAntiguo = document.getElementById("numeroTexto").value;
    var numeroNuevo = document.getElementById("numeroTextoNuevo").value;

    console.log("Numero antiguo: "+numeroAntiguo);
    console.log("Numero nuevo: "+numeroNuevo);

    if (!isNaN(numeroAntiguo) && !isNaN(numeroNuevo))
    {
        for (var i = 0; i<arrayNumeros.length; i++)
        {
            if (arrayNumeros[i] == parseInt(numeroAntiguo))
            {
                arrayNumeros[i] = parseInt(numeroNuevo);
            }
        }
        document.getElementById("cajasTexto").innerHTML = "<h2>Número: <input type=\"text\" id=\"numeroTexto\" placeholder=\"Introduzca un número\" /></h2>";
        document.getElementById("numeroTexto").value = "";

        document.getElementById("botones").innerHTML = "<input type=\"button\" value=\"Primera\" onclick=\"cambiarPosicion('primera')\" />"+
        "<input type=\"button\" value=\"&lt;&lt; Anterior\" onclick=\"cambiarPosicion('anterior')\" />"+
        "<input type=\"button\" value=\"Siguiente &gt;&gt;\" onclick=\"cambiarPosicion('siguiente')\" />"+
        "<input type=\"button\" value=\"Última\" onclick=\"cambiarPosicion('ultima')\" />"+
        "<br/><br/>"+
        "<input type=\"button\" value=\"Alta\" onclick=\"realizarAccion('alta')\" />"+
        "<input type=\"button\" value=\"Baja\" onclick=\"realizarAccion('baja')\" />"+
        "<input type=\"button\" value=\"Modificación\" onclick=\"realizarAccion('modificacion')\" />"+
        "<input type=\"button\" value=\"Listado\" onclick=\"realizarAccion('listado')\" />";

        posicionActual = arrayNumeros[indiceActual];

        generarRespuesta(indiceActual,posicionActual);
    }
    else
    {
        alert("Debes introducir un número");
    }
}
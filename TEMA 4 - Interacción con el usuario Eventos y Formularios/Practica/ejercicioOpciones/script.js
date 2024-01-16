var arrayIzquierda = [
    "Opcion 1",
    "Opcion 2",
    "Opcion 3"
];

var arrayDerecha = [];

ponerOpciones("listaIzquierda",arrayIzquierda);

function pasarSeleccionadosADerecha()
{
    var opcionSeleccionada = document.getElementById("listaIzquierda").value;

    if (opcionSeleccionada != "")
    {
        if (arrayDerecha.includes(opcionSeleccionada))
        {
            alert("La lista de la Derecha ya tiene un elemento con el ese nombre");
        }
        else
        {
            arrayIzquierda.splice(arrayIzquierda.indexOf(opcionSeleccionada),1);

            arrayDerecha.push(opcionSeleccionada);

            actualizarListas();
        }
    }
    else
    {
        alert("No se ha seleccionado ningún elemento de la lista Izquierda");
    }
}

function pasarSeleccionadosAIzquierda()
{
    var opcionSeleccionada = document.getElementById("listaDerecha").value;

    if (opcionSeleccionada != "")
    {
        if (arrayIzquierda.includes(opcionSeleccionada))
        {
            alert("La lista de la Izquierda ya tiene un elemento con el ese nombre");
        }
        else
        {
            arrayDerecha.splice(arrayDerecha.indexOf(opcionSeleccionada),1);

            arrayIzquierda.push(opcionSeleccionada);

            actualizarListas();
        }
    }
    else
    {
        alert("No se ha seleccionado ningún elemento de la lista Derecha");
    }
}

function todasADerecha()
{
    var opcionRepetida = false;

    arrayIzquierda.forEach(opcion => {
        if (arrayDerecha.includes(opcion)) opcionRepetida = true;
    });

    if (opcionRepetida == false)
    {
        arrayDerecha = arrayIzquierda;
        arrayIzquierda = [];
        actualizarListas();
    }
    else
    {
        alert("La lista de la Izquierda contiene opciones ya existentes en la lista de la Derecha");
    }
}

function eliminarOpcionesDerecha()
{
    if (confirm("¿Está seguro de que quiere borrar todos las opciones de la lista de la DERECHA?"))
    {
        arrayDerecha = [];

        actualizarListas();
    }
}

function borrarSeleccionadoIzquierda()
{
    var opcionSeleccionada = document.getElementById("listaIzquierda").value;

    if (opcionSeleccionada != "")
    {
        if (confirm("¿Está seguro de que quiere borrar la opción: '"+opcionSeleccionada+"' de la lista de la IZQUIERDA?"))
        {
            arrayIzquierda.splice(arrayIzquierda.indexOf(opcionSeleccionada),1);
    
            actualizarListas();
        }
    }
    else
    {
        alert("No se ha seleccionado ningún valor de la lista de la IZQUIERDA");
    }
}

function borrarSeleccionadoDerecha()
{
    var opcionSeleccionada = document.getElementById("listaDerecha").value;

    if (opcionSeleccionada != "")
    {
        if (confirm("¿Está seguro de que quiere borrar la opción: '"+opcionSeleccionada+"' de la lista de la DERECHA?"))
        {
            arrayDerecha.splice(arrayDerecha.indexOf(opcionSeleccionada),1);

            actualizarListas();
        }
    }
    else
    {
        alert("No se ha seleccionado ningún valor de la lista de la DERECHA");
    }
}

function copiarAIzquierda()
{
    var opcionSeleccionada = document.getElementById("listaDerecha").value;

    if (opcionSeleccionada != "")
    {
        if (arrayIzquierda.includes(opcionSeleccionada))
        {
            alert("La lista IZQUIERDA contiene una opción con ese nombre");
        }
        else
        {
            arrayIzquierda.push(opcionSeleccionada);
            actualizarListas();
        }
    }
    else
    {
        alert("No se ha seleccionado ninguna opción de la lista de la DERECHA");
    }
}

function copiarADerecha()
{
    var opcionSeleccionada = document.getElementById("listaIzquierda").value;

    if (opcionSeleccionada != "")
    {
        if (arrayDerecha.includes(opcionSeleccionada))
        {
            alert("La lista DERECHA contiene una opción con ese nombre");
        }
        else
        {
            arrayDerecha.push(opcionSeleccionada);
            actualizarListas();
        }
    }
    else
    {
        alert("No se ha seleccionado ninguna opción de la lista de la IZQUIERDA");
    }
}

function eliminarOpcionesIzquierda()
{
    if (confirm("¿Está seguro de que quiere borrar todos las opciones de la lista de la IZQUIERDA?"))
    {
        arrayIzquierda = [];

        actualizarListas();
    }
}

function todasAIzquierda()
{
    var opcionRepetida = false;

    arrayDerecha.forEach(opcion => {
        if (arrayIzquierda.includes(opcion)) opcionRepetida = true;
    });

    if (opcionRepetida == false)
    {
        arrayIzquierda = arrayDerecha;
        arrayDerecha = [];
        actualizarListas();
    }
    else
    {
        alert("La lista de la Derecha contiene opciones ya existentes en la lista de la Izquierda");
    }
}

function actualizarListas()
{
    var listaIzquierda = "";   
    arrayIzquierda.forEach(opcion => {
        listaIzquierda += ("<option value=\""+opcion+"\">"+opcion+"</option>");
    });

    var listaDerecha = "";   
    arrayDerecha.forEach(opcion => {
        listaDerecha += ("<option value=\""+opcion+"\">"+opcion+"</option>");
    });

    document.getElementById("listaIzquierda").innerHTML = listaIzquierda;
    document.getElementById("listaDerecha").innerHTML = listaDerecha;
}

function agregarOpcion()
{
    var textoOpcion = document.getElementById("texto").value;

    if (arrayIzquierda.includes(textoOpcion))
    {
        alert("Ya existe una opción con ese nombre");
    }
    else
    {
        if (textoOpcion.trim != "")
        {
            arrayIzquierda.push(textoOpcion);
            console.log(textoOpcion);

            document.getElementById("botonAñadir").disabled = true;
            document.getElementById("texto").value = "";

            ponerOpciones("listaIzquierda",arrayIzquierda);
        }
        else
        {
            alert("No puedes dejar el campo de texto vacío");
        }
    }
}

function ponerOpciones(select,array)
{
    var listaOpciones;

    array.forEach(opcion => {
        listaOpciones += ("<option value=\""+opcion+"\">"+opcion+"</option>");
    });
    
    document.getElementById(select).innerHTML = listaOpciones;
}

function comprobarTexto()
{
    var textoCasilla = document.getElementById("texto").value;
    if ( (textoCasilla.trim() != "") && (textoCasilla.length >= 1) )
    {
        document.getElementById("botonAñadir").disabled = false;
    }
    else 
    {
        document.getElementById("botonAñadir").disabled = true;
    }
}

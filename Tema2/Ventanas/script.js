var numVentanas = 0;

function crearVentana()
{
    // GENERAMOS EL NOMBRE DE LA VENTANA
    numVentanas = numVentanas + 1;
    var nombreVentana = "Ventana "+numVentanas;

    // CREAMOS LA VENTANA
    var ventana = window.open("", nombreVentana, "width=400,height=200");

    // MODIFICAMOS LA VENTANA
    ventana.document.write("<h1>Nueva Ventana</h1><br/><h2>Ventana NUM: "+numVentanas+"</h2>");

}

function cerrarVentana()
{
    if (numVentanas > 0)
    {
        var ultimaVentana = ("Ventana "+numVentanas);

        var ventana = window.open("", ultimaVentana)

        if (ventana) {
            ventana.close();
            numVentanas = numVentanas - 1;
        }
    }
}

function cerrarTodasLasVentanas()
{
    for (var i = numVentanas; i > 0; i--)
    {
        var nombreVentana = "Ventana "+i;
        var ventana = window.open("", nombreVentana)

        if (ventana) {
            ventana.close();
            numVentanas = numVentanas - 1;
        }
    }
}
var mensajeResultado;

function validarDatos()
{
    mensajeResultado = "";
    document.getElementById("resultado").innerHTML = "";

    var nombre = document.getElementById("nombre").value;
    var edad = document.getElementById("edad").value;

    var nombreEsValido = nombreValido(nombre.trim());
    var edadEsValida = edadValida(edad.trim());

    if (nombreEsValido && edadEsValida)
    {
        document.getElementById("resultado").innerHTML = "<h4 style=\"color: darkblue;\">Todos los caracteres son correctos</h4>";
    }
    else
    {
        document.getElementById("resultado").innerHTML = mensajeResultado;
    }
}

function nombreValido(nombre)
{
    var expresion = /\d/;

    if (!expresion.test(nombre) && (nombre.length >= 5) && (nombre.length <= 25))
    {
        return true
    }
    else
    {
        var caracteresNombre = nombre.split("");
        caracteresNombre.forEach(caracter => {
            if (expresion.test(caracter))
            {
                mensajeResultado += ("<h4 style=\"color: red;\">Error en el caracter "+(caracteresNombre.indexOf(caracter)+1)+" del nombre</h4>");
            }
        });

        return false;
    }
}

function edadValida(edad)
{
    if ( (!isNaN(edad)) && (edad >= 5) && (edad <= 110))
    {
        return true;
    }
    else
    {
        if (isNaN(edad))
        {
            mensajeResultado += ("<h4 style=\"color: red;\">La edad debe ser un número</h4>");
        }
        else
        {
            mensajeResultado += ("<h4 style=\"color: red;\">La edad debe estar entre 5 y 110</h4>");
        }

        return false;
    }
}
var casilla = "";

function comprobarCasillas(casillaSelecc)
{
    casilla = casillaSelecc;
    setTimeout(hacerComprobacion,100);
}

function hacerComprobacion()
{
    if (casilla == "nombre")
    {
        if (document.getElementById("nombre").value != "") document.getElementById("apellidos").disabled = false;
        else
        {
            document.getElementById("apellidos").disabled = true;
            document.getElementById("direccion").disabled = true;
            document.getElementById("enviar").disabled = true;
        }
    }
    else if (casilla == "apellidos")
    {
        if (document.getElementById("apellidos").value != "") document.getElementById("direccion").disabled = false;
        else
        {
            document.getElementById("direccion").disabled = true;
            document.getElementById("enviar").disabled = true;
        } 
    }
    else if (casilla == "direccion")
    {
        if (document.getElementById("direccion").value != "") document.getElementById("enviar").disabled = false;
        else document.getElementById("enviar").disabled = true; 
    }
}
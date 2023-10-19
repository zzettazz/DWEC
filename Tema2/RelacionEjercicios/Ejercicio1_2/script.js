function procesar()
{
    var nombre = document.getElementById("nombre").value;
    var primerApellido = document.getElementById("apellido1").value;
    var segundoApellido = document.getElementById("apellido2").value;

    var nombreCompleto = construirNombrePropio(nombre,primerApellido,segundoApellido);

    var cadenaEj1 = "Bienvenido "+nombreCompleto;
    var cadenaEj2= cadenaEj1+"<br/>"+cadenaEj1.replace(/\s+/g, '');;

    document.getElementById("resultado").innerHTML=cadenaEj2;
}

function construirNombrePropio(nombre,apellido1,apellido2)
{
    return nombre.charAt(0).toUpperCase() + nombre.substring(1, nombre.length).toLowerCase() + " " +
    apellido1.charAt(0).toUpperCase() + apellido1.substring(1, apellido1.length).toLowerCase() + " " +
    apellido2.charAt(0).toUpperCase() + apellido2.substring(1, apellido2.length).toLowerCase();
}
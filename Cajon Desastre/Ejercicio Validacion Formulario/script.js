function validarDatos()
{
    var formulario = document.getElementById("miFormulario");

    if ( matriculaValida( formulario.matricula ) )
    {

    }
}

function matriculaValida(matricula)
{
    var expresion = /[0-9]{4}-([B-Db-d]|[F-Hf-h]|[J-Nj-n]|[P-Tp-t]|[V-Zv-z]){3}/;

    if ( expresion.test(matricula) && (matricula.length == 8) ) return true;
    else return false;
}

function telefonoValido(telefono)
{
    var expresion = /[6-9]{1}[0-9]{1}-[0-9]{3}-[0-9]{2}-[0-9]{2}/;
    
    if ( expresion.test(telefono) && (telefono.length == 12) ) return true;
    else return false;
}

function codigoPostalValido(codigoPostal)
{
    var expresion = /\d{5}/;

    if ( expresion.test(codigoPostal) && (codigoPostal.length == 5) ) return true;
    else return false;
}

function nombreValido(nombre)
{
    var expresion = /[A-Za-z]{2}/
}

function urlValido(url)
{
    var expresion = //
}
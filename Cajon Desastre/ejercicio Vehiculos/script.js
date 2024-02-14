class Vehiculo
{
    constructor(numBastidor,matricula,tipo)
    {
        this._numBastidor = numBastidor;
        this._matricula = matricula;
        this._tipo = tipo;

        var fechaActual = new Date();
        this._fechaHoraAlta = (
            fechaActual.getDate() + "/" +
            (fechaActual.getMonth() + 1) + "/" +
            fechaActual.getFullYear() + " " +
            fechaActual.getHours() + ":" +
            fechaActual.getMinutes()
        );
    }

    getNumbastidor()
    {
        return this._numBastidor;
    }

    getMatricula()
    {
        return this._matricula;
    }

    getTipo()
    {
        return this._tipo;
    }

    getFechaHoraAlta()
    {
        return this._fechaHoraAlta;
    }

    setMatricula(matricula)
    {
        this._matricula = matricula;
    }

    setTipo(tipo)
    {
        this._tipo = tipo;
    }

    static listarVehiculos()
    {
        var tabla = "<table border style=\"margin: 0 auto;\"><tr><th>Matrícula</th><th>Nº bastidor</th><th>Tipo</th><th>Fecha y hora de alta</th><th>Acciones</th></tr>";

        arrayVehiculos.forEach(vehiculo => {

            tabla += (
                "<tr><td>" + vehiculo.getMatricula() +
                "</td><td>" + vehiculo.getNumbastidor() +
                "</td><td>" + ("<img height=\"40px\"src=\"img/"+ vehiculo.getTipo() +".png\">") +
                "</td><td>" + vehiculo.getFechaHoraAlta() +
                "</td><td>" + ("<input type=\"button\" value=\"Modificar\" /><input type=\"button\" value=\"Eliminar\" /><br/><input type=\"button\" value=\"En ventana\" /></td></tr>")
            );

        });

        tabla += "</table>";

        var miVentana = window.open("", "tabla de vehículos","height=500px,width=1000px");
        miVentana.document.write(tabla);
    }
}

var arrayVehiculos = [
    new Vehiculo("ERT87364TYH","5967GHT","coche"),
    new Vehiculo("ERHT86764OPT","5877TRG","camion"),
    new Vehiculo("GKO19295LFP","3523DCR","moto"),
    new Vehiculo("AJE46574JKE","9463JKT","furgoneta")
];

actualizarTabla();

function confirmarModificacion()
{
    var numBastidor = document.getElementById("bastidorModificacion").value;
    var matricula = document.getElementById("matriculaModificacion").value;
    var tipo = document.getElementById("tipoModificacion").value;

    arrayVehiculos.forEach(vehiculo => {
        if (vehiculo.getNumbastidor() == numBastidor) arrayVehiculos[arrayVehiculos.indexOf(vehiculo)] = (new Vehiculo(numBastidor,matricula,tipo));
    });

    document.getElementById("bastidorModificacion").disabled = true;
    document.getElementById("matriculaModificacion").disabled = true;
    document.getElementById("tipoModificacion").disabled = true;
    document.getElementById("botonConfirmarModificacion").disabled = true;
    document.getElementById("botonCancelarModificacion").disabled = true;


    var numBastidor = document.getElementById("bastidorModificacion").value = "";
    var matricula = document.getElementById("matriculaModificacion").value = "";

    actualizarTabla();
}

function cancelarModificacion()
{
    document.getElementById("bastidorModificacion").disabled = true;
    document.getElementById("matriculaModificacion").disabled = true;
    document.getElementById("tipoModificacion").disabled = true;
    document.getElementById("botonConfirmarModificacion").disabled = true;
    document.getElementById("botonCancelarModificacion").disabled = true;


    var numBastidor = document.getElementById("bastidorModificacion").value = "";
    var matricula = document.getElementById("matriculaModificacion").value = "";
}

function comprobarMatriculaModificacion()
{
    var matricula = document.getElementById("matriculaModificacion").value;

    var patron = /[0-9]{4}[A-Za-z]{3}/;

    if  (patron.test(matricula) && (matricula.length == 7) )
    {
        document.getElementById("botonConfirmarModificacion").disabled = false;
        document.getElementById("botonCancelarModificacion").disabled = false;
    }
    else
    {
        document.getElementById("botonConfirmarModificacion").disabled = true;
        document.getElementById("botonCancelarModificacion").disabled = true;
    }
}

function setearDatos(bastidorVehiculo)
{
    var vehiculoBuscado;

    arrayVehiculos.forEach(vehiculo => {
        if (vehiculo.getNumbastidor() == bastidorVehiculo) vehiculoBuscado = vehiculo;
    });

    document.getElementById("bastidorModificacion").value = vehiculoBuscado.getNumbastidor();
    document.getElementById("matriculaModificacion").value = vehiculoBuscado.getMatricula();
    document.getElementById("tipoModificacion").value = vehiculoBuscado.getTipo();

    document.getElementById("matriculaModificacion").disabled = false;
    document.getElementById("tipoModificacion").disabled = false;
    document.getElementById("botonConfirmarModificacion").disabled = false;
    document.getElementById("botonCancelarModificacion").disabled = false;
}

function comprobarBastidorAlta()
{
    var bastidor = document.getElementById("bastidorAlta").value;

    var patron = /[A-Za-z]{3}[0-9]{5}[A-Za-z]{3}/;

    if  (patron.test(bastidor) && (bastidor.length == 11) )
    {
        document.getElementById("matriculaAlta").disabled = false;
    }
    else
    {
        document.getElementById("matriculaAlta").disabled = true;
    }
}

function comprobarMatriculaAlta()
{
    var matricula = document.getElementById("matriculaAlta").value;

    var patron = /[0-9]{4}[A-Za-z]{3}/;

    if  (patron.test(matricula) && (matricula.length == 7) )
    {
        document.getElementById("botonAlta").disabled = false;
    }
    else
    {
        document.getElementById("botonAlta").disabled = true;
    }
}

function darAlta()
{
    var bastidor = document.getElementById("bastidorAlta").value;
    var matricula = document.getElementById("matriculaAlta").value;
    var tipo = document.getElementById("tipoAlta").value;

    arrayVehiculos.push(new Vehiculo(bastidor,matricula,tipo));

    actualizarTabla();

    document.getElementById("bastidorAlta").disabled = true;
    document.getElementById("matriculaAlta").disabled = true;
    document.getElementById("botonAlta").disabled = true;

    document.getElementById("bastidorAlta").value = "";
    document.getElementById("matriculaAlta").value = "";
}

function eliminarVehiculo(bastidorVehiculo)
{
    arrayVehiculos.forEach(vehiculo => {
        if (vehiculo.getNumbastidor() == bastidorVehiculo)
        {
            arrayVehiculos.splice(arrayVehiculos.indexOf(vehiculo),1);
        }
    });

    actualizarTabla();
}

function mostrarVehiculoEnVentana(numBastidor)
{
    var vehiculoBuscado;

    arrayVehiculos.forEach(vehiculo => {
        if (vehiculo.getNumbastidor() == numBastidor) vehiculoBuscado = vehiculo;
    });

    var tabla = "<table border style=\"margin: 0 auto; text-align: center;\"><tr><th>Matrícula</th><th>Nº bastidor</th><th>Tipo</th><th>Fecha y hora de alta</th><th>Acciones</th></tr>";

    tabla += (
        "<tr><td>" + vehiculoBuscado.getMatricula() +
        "</td><td>" + vehiculoBuscado.getNumbastidor() +
        "</td><td>" + ("<img height=\"40px\"src=\"img/"+ vehiculoBuscado.getTipo() +".png\">") +
        "</td><td>" + vehiculoBuscado.getFechaHoraAlta() +
        "</td><td>" + ("<input type=\"button\" value=\"Modificar\" onclick=\"setearDatos('"+vehiculoBuscado.getNumbastidor()+"')\" /><input type=\"button\" value=\"Eliminar\" onclick=\"eliminarVehiculo('"+vehiculoBuscado.getNumbastidor()+"')\"/><br/><input type=\"button\" value=\"En ventana\" onclick=\"mostrarVehiculoEnVentana('"+vehiculoBuscado.getNumbastidor()+"')\"/></td></tr>")
    );

    tabla += "</table>";

    var miVentana = window.open("", "tabla de vehículos","height=500px,width=1000px");
    miVentana.document.write(tabla);
}

function actualizarTabla()
{
    var tabla = "<table border style=\"margin: 0 auto; text-align: center;\"><tr><th>Matrícula</th><th>Nº bastidor</th><th>Tipo</th><th>Fecha y hora de alta</th><th>Acciones</th></tr>";

    arrayVehiculos.forEach(vehiculo => {

        tabla += (
            "<tr><td>" + vehiculo.getMatricula() +
            "</td><td>" + vehiculo.getNumbastidor() +
            "</td><td>" + ("<img height=\"40px\"src=\"img/"+ vehiculo.getTipo() +".png\">") +
            "</td><td>" + vehiculo.getFechaHoraAlta() +
            "</td><td>" + ("<input type=\"button\" value=\"Modificar\" onclick=\"setearDatos('"+vehiculo.getNumbastidor()+"')\" /><input type=\"button\" value=\"Eliminar\" onclick=\"eliminarVehiculo('"+vehiculo.getNumbastidor()+"')\"/><br/><input type=\"button\" value=\"En ventana\" onclick=\"mostrarVehiculoEnVentana('"+vehiculo.getNumbastidor()+"')\"/></td></tr>")
        );

    });

    tabla += "</table>";

    document.getElementById("tabla").innerHTML = tabla;
}
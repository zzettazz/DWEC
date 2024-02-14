class Persona
{
    constructor(nombre,dni,sexo,fechaNacimiento)
    {
        this._nombre = nombre;
        this._dni = dni;
        this._sexo = sexo;
        this._fechaNacimiento = fechaNacimiento;

        var fechaActual = new Date();

        var fechaHoraAlta = fechaActual.getDate() + "/" + (fechaActual.getMonth()+1) + "/" + fechaActual.getFullYear() + " " + fechaActual.getHours() + ":" + fechaActual.getMinutes();

        this._fechaHoraAlta = fechaHoraAlta;
        this._fechaHoraModificacion = fechaHoraAlta;
    }

    getNombre()
    {
        return this._nombre;
    }

    getDNI()
    {
        return this._dni;
    }

    getSexo()
    {
        return this._sexo;
    }

    getFechaNacimiento()
    {
        return this._fechaNacimiento;
    }

    getFechaHoraAlta()
    {
        return this._fechaHoraAlta;
    }

    getFechaHoraModificacion()
    {
        return this._fechaHoraModificacion;
    }
}

var formularioAltaPersonas = document.getElementById("altaPersonas");

var arrayPersonas = [
    new Persona("Pepito","47412333W", "masculino","12/12/2000")
];

actualizarTablas();

function validarNombre()
{
    var nombreIntroducido = formularioAltaPersonas.nombre.value;

    var expresion = /^[A-Za-z]{2,20}$/;

    if ( expresion.test(nombreIntroducido) )
    {
        formularioAltaPersonas.nombre.style.color = "green";
        formularioAltaPersonas.dni.disabled = false;
    }
    else
    {
        formularioAltaPersonas.nombre.style.color = "red";
        formularioAltaPersonas.dni.disabled = true;
    }
}

function validarDNI()
{
    var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    
    var dniIntroducido = (formularioAltaPersonas.dni.value).toUpperCase()

    var numerosDNI = dniIntroducido.substring(0,8);
    var modulo = numerosDNI % 23;

    var letraDNI = letras[modulo];

    var expresion = /^[0-9]{8}[A-Z]{1}$/;

    if (expresion.test(dniIntroducido) && ( (dniIntroducido.charAt(8)) == letraDNI))
    {
        formularioAltaPersonas.dni.style.color = "green";
        formularioAltaPersonas.sexo.disabled = false
        formularioAltaPersonas.fechaNacimiento.disabled = false;
    }
    else
    {
        formularioAltaPersonas.dni.style.color = "red";
        formularioAltaPersonas.sexo.disabled = true;
        formularioAltaPersonas.fechaNacimiento.disabled = true;
    }
}

function validarFecha() {
    var fechaIntroducida = formularioAltaPersonas.fechaNacimiento.value;

    var expresion = /^(0[1-9]{1}|(1|2)[0-9]{1}|3[0-1]{1})\/(0[1-9]{1}|1[0-2]{1})\/(19[0-9]{2}|20((0|1)[0-9]{1}|2[0-4]{1}))$/;

    if (expresion.test(fechaIntroducida))
    {
        formularioAltaPersonas.fechaNacimiento.style.color = "green";
        formularioAltaPersonas.botonConfirmar.disabled = false;
        formularioAltaPersonas.botonCancelar.disabled = false;
    }
    else
    {
        formularioAltaPersonas.fechaNacimiento.style.color = "red";
        formularioAltaPersonas.botonConfirmar.disabled = true;
        formularioAltaPersonas.botonCancelar.disabled = true;
    }
}

function darAltaPersona(evento)
{
    evento.preventDefault();
    
    var p = new Persona(formularioAltaPersonas.nombre.value,formularioAltaPersonas.dni.value,formularioAltaPersonas.sexo.value,formularioAltaPersonas.fechaNacimiento.value);

    arrayPersonas.push(p);

    actualizarTablas();
}

function actualizarTablas()
{
    var tablaPersonas = "<table border><tr><th>Nombre</th><th>DNI</th><th>Sexo</th><th>Fecha Nacimiento</th><th>Alta</th><th>Última Modificación</th><th>Acciones</th></tr>";

    arrayPersonas.forEach(persona => {
        tablaPersonas += ("<tr><td>"+persona.getNombre()+"</td><td>"+persona.getDNI()+"</td><td>"+persona.getSexo()+"</td><td>"+persona.getFechaNacimiento()+"</td><td>"+persona.getFechaHoraAlta()+"</td><td>"+persona.getFechaHoraModificacion()+"</td><td>"+"<input type=\"button\" onclick=\"modificarPersona('"+persona.getDNI()+"')\" value=\"Modificar\"><br/><input type=\"button\" onclick=\"eliminarPersona('"+persona.getDNI()+"')\" value=\"Eliminar\">"+"</td></tr>");
    });

    tablaPersonas += "</table>";

    document.getElementById("tablaPersonas").innerHTML = tablaPersonas;
}
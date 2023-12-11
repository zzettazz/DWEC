class Persona{
    constructor(nombre,apellidos,direccion,fechaNacimiento,genero,codigoPostal)
    {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._direccion = direccion;
        this._fechaNacimiento = fechaNacimiento;
        this._genero = genero;
        this._codigoPostal = codigoPostal;
    }


    mostrar()
    {
        document.getElementById("nombre").value=this._nombre;
        document.getElementById("apellidos").value=this._apellidos;
        document.getElementById("direccion").value=this._direccion;
        document.getElementById("fechaNacimiento").value=this._fechaNacimiento;
        document.getElementById("genero").value=this._genero;
        document.getElementById("codigoPostal").value=this._codigoPostal;
    }
}

var personaActual;

var arrayPersonas = [
    new Persona("Juan","Romero Pérez","Calle 1","13/12/2020","masculino",28888),
    new Persona("Pedro","Rodríguez Gómez","Calle 2","34/10/1990","masculino",28850),
    new Persona("Ana","María Romerales","Calle 1","20/02/1960","femenino",28739)
];

personaActual = arrayPersonas[0];
personaActual.mostrar();

function ejecutarAccion(accion)
{
    if (accion == "siguiente")
    {
        var indicePersonaActual = arrayPersonas.indexOf(personaActual);

        if (indicePersonaActual < (arrayPersonas.length -1))
        {
            personaActual = arrayPersonas[indicePersonaActual+1];
            personaActual.mostrar();
        }
    }
    else if (accion == "anterior")
    {
        var indicePersonaActual = arrayPersonas.indexOf(personaActual);

        if (indicePersonaActual > 0)
        {
            personaActual = arrayPersonas[indicePersonaActual-1];
            personaActual.mostrar();
        }
    }
    else if (accion == "alta")
    {
        document.getElementById("botonesAccion").innerHTML = generarBotonesAccion("aceptarAlta","cancelar");
        
        modificarCampos([
            {"id":"nombre","valor":false},
            {"id":"nombre","valor":""},
            {"id":"apellidos","valor":false},
            {"id":"apellidos","valor":""},
            {"id":"direccion","valor":false},
            {"id":"direccion","valor":""},
            {"id":"fechaNacimiento","valor":false},
            {"id":"fechaNacimiento","valor":""},
            {"id":"genero","valor":false},
            {"id":"genero","valor":""},
            {"id":"codigoPostal","valor":false},
            {"id":"codigoPostal","valor":""},
            {"id":"nombre","valor":false},
            {"id":"alta","valor":true},
            {"id":"baja","valor":true},
            {"id":"modificacion","valor":true},
            {"id":"listado","valor":true},
            {"id":"anterior","valor":true},
            {"id":"siguiente","valor":true},
        ]);
    }
    else if (accion == "aceptarAlta")
    {
        var datos = obtenerDatosPantalla();
        
        var nuevaPersona = new Persona(datos["nombre"],datos["apellidos"],datos["direccion"],datos["fechaNacimiento"],datos["genero"],datos["codigoPostal"]);

        arrayPersonas.push(nuevaPersona);
        personaActual = nuevaPersona;

        modificarCampos([
            {"id":"nombre","valor":true},
            {"id":"apellidos","valor":true},
            {"id":"direccion","valor":true},
            {"id":"fechaNacimiento","valor":true},
            {"id":"genero","valor":true},
            {"id":"codigoPostal","valor":true},
            {"id":"nombre","valor":true},
            {"id":"alta","valor":false},
            {"id":"baja","valor":false},
            {"id":"modificacion","valor":false},
            {"id":"listado","valor":false},
            {"id":"anterior","valor":false},
            {"id":"siguiente","valor":false},
        ]);

        personaActual.mostrar();

        document.getElementById("botonesAccion").innerHTML = "";
    }
    else if (accion == "cancelar")
    {
        document.getElementById("botonesAccion").innerHTML = "";

        modificarCampos([
            {"id":"nombre","valor":true},
            {"id":"nombre","valor":personaActual._nombre},
            {"id":"apellidos","valor":true},
            {"id":"apellidos","valor":personaActual._apellidos},
            {"id":"direccion","valor":true},
            {"id":"direccion","valor":personaActual._direccion},
            {"id":"fechaNacimiento","valor":true},
            {"id":"fechaNacimiento","valor":personaActual._fechaNacimiento},
            {"id":"genero","valor":true},
            {"id":"genero","valor":personaActual._genero},
            {"id":"codigoPostal","valor":true},
            {"id":"codigoPostal","valor":personaActual._codigoPostal},
            {"id":"nombre","valor":true},
            {"id":"alta","valor":false},
            {"id":"baja","valor":false},
            {"id":"modificacion","valor":false},
            {"id":"listado","valor":false},
            {"id":"anterior","valor":false},
            {"id":"siguiente","valor":false},
        ]);
    }
    else if (accion == "baja")
    {
        var indicePersonaActual = arrayPersonas.indexOf(personaActual);

        if (indicePersonaActual == 0)
        {
            arrayPersonas.splice(0,1);
            personaActual = arrayPersonas[0];
            personaActual.mostrar();
        }
        else if (indicePersonaActual == (arrayPersonas.length-1))
        {
            arrayPersonas.splice(arrayPersonas.length-1,1);
            personaActual = arrayPersonas[arrayPersonas.length-1];
            personaActual.mostrar();
        }
        else
        {
            var nuevaPersona = arrayPersonas[indicePersonaActual+1];

            arrayPersonas.splice(indicePersonaActual,1);
            personaActual = nuevaPersona;
            personaActual.mostrar();
        }
    }
    else if (accion == "modificarPersona")
    {
        document.getElementById("botonesAccion").innerHTML = generarBotonesAccion("aceptarModificacion","cancelar");

        modificarCampos([
            {"id":"nombre","valor":false},
            {"id":"apellidos","valor":false},
            {"id":"direccion","valor":false},
            {"id":"fechaNacimiento","valor":false},
            {"id":"genero","valor":false},
            {"id":"codigoPostal","valor":false},
            {"id":"nombre","valor":false},
            {"id":"alta","valor":true},
            {"id":"baja","valor":true},
            {"id":"modificacion","valor":true},
            {"id":"listado","valor":true},
            {"id":"anterior","valor":true},
            {"id":"siguiente","valor":true}
        ])
    }
    else if (accion == "aceptarModificacion")
    {
        document.getElementById("botonesAccion").innerHTML = "";

        modificarCampos([
            {"id":"nombre","valor":true},
            {"id":"apellidos","valor":true},
            {"id":"direccion","valor":true},
            {"id":"fechaNacimiento","valor":true},
            {"id":"genero","valor":true},
            {"id":"codigoPostal","valor":true},
            {"id":"nombre","valor":true},
            {"id":"alta","valor":false},
            {"id":"baja","valor":false},
            {"id":"modificacion","valor":false},
            {"id":"listado","valor":false},
            {"id":"anterior","valor":false},
            {"id":"siguiente","valor":false}
        ])

        var datosNuevaPersona = obtenerDatosPantalla();

        var nuevaPersona = new Persona(datosNuevaPersona["nombre"],datosNuevaPersona["apellidos"],datosNuevaPersona["direccion"],datosNuevaPersona["fechaNacimiento"],datosNuevaPersona["genero"],datosNuevaPersona["codigoPostal"]);

        arrayPersonas[arrayPersonas.indexOf(personaActual)] = nuevaPersona;

        personaActual = nuevaPersona;

        personaActual.mostrar();
    }
    else if (accion == "mostrarListado")
    {
        var ventana = window.document.open("","Ventana de Listado","height=400;width=400;");

        var tabla = "<table border><th>Nombre y Apellidos</th><th>Direccion</th><th>Fecha de Nacimiento</th><th>Edad</th><th>Codigo Postal</th>";

        arrayPersonas.forEach(persona => {
            tabla += "<tr><td>"+persona._nombre+ " "+persona._apellidos+"</td><td>"+persona._direccion+"</td><td>"+persona._fechaNacimiento+"</td><td>"+((persona._genero.charAt(0).toUpperCase())+(persona._genero.substring(1,persona._genero.length)))+"</td><td>"+persona._codigoPostal+"</td>";
        });

        tabla += "</table>";

        ventana.document.write(tabla);
    }
}

function generarBotonesAccion(aceptarHandler,cancelarHandler)
{
    return "<button onclick=\"ejecutarAccion('"+aceptarHandler+"')\">Aceptar</button><button onclick=\"ejecutarAccion('"+cancelarHandler+"')\">Cancelar</button>";
}

function modificarCampos(arrayCampos)
{
    arrayCampos.forEach(campo => {
        if (typeof campo["valor"] == "boolean")
        {
            document.getElementById(campo["id"]).disabled = campo["valor"];
        }
        else
        {
            document.getElementById(campo["id"]).value = campo["valor"];
        }
    });
}
function obtenerDatosPantalla() {
    return {
        "nombre": document.getElementById("nombre").value,
        "apellidos": document.getElementById("apellidos").value,
        "direccion": document.getElementById("direccion").value,
        "fechaNacimiento": document.getElementById("fechaNacimiento").value,
        "genero": document.getElementById("genero").value,
        "codigoPostal": document.getElementById("codigoPostal").value
    };
}
class Humano
{
    constructor(nombre, peso, edad) {
        this._nombre = nombre;
        this._peso = peso;
        this._edad = edad;
        switch (true) {
            case edad == 10 || edad == 11:
                this._categoria = "Benjamín";
                break;
            case edad == 12 || edad == 13:
                this._categoria = "Alevín";
                break;
            case edad == 14 || edad == 15:
                this._categoria = "Infantil";
                break;
            case edad == 16 || edad == 17:
                this._categoria = "Cadete";
                break;
            case edad == 18 || edad == 19:
                this._categoria = "Junior";
                break;
            case edad >= 20 && edad <= 29:
                this._categoria = "Senior 20";
                break;
            case edad >= 30 && edad <= 39:
                this._categoria = "Senior 30";
                break;
            case edad >= 40 && edad <= 49:
                this._categoria = "Senior 40";
                break;
            case edad >= 50 && edad <= 59:
                this._categoria = "Senior 50";
                break;
            case edad >= 60 && edad <= 69:
                this._categoria = "Senior 60";
                break;
            case edad >= 70 && edad <= 79:
                this._categoria = "Senior 70";
                break;
            default:
                this._categoria = "No categorizado";
        }
    }

    getDatos()
    {
        return {"nombre" : this._nombre, "peso" : this._peso, "edad" : this._edad, "categoria" : this._categoria};
    }

    toString()
    {
        return "Nombre: "+this._nombre+" || Peso: "+this._peso+" || Edad: "+this._edad;
    }

    static mostrarHumanos(arrayDeHumanos)
    {
        var tabla = "<table border><th>Nombre</th><th>Peso</th><th>Edad</th><th>Categoria</th>";

        arrayDeHumanos.forEach(humano => {
            tabla += "<tr><td>"+humano.getDatos()["nombre"]+"</td><td>"+humano.getDatos()["peso"]+"</td><td>"+humano.getDatos()["edad"]+"</td><td>"+humano.getDatos()["categoria"]+"</td></tr>";
        });
        
        tabla += "</table>";

        var ventana = window.open("", "Listado Humanos", "width=400,height=200");

        ventana.document.write(tabla+"<br/><button onclick=\"window.close()\">Cerrar ventana</button>");
    }
}

var arrayHumanos = [
    new Humano("Pepito",78,47),
    new Humano("Juan",49,79),
    new Humano("Ana",69,65)
];

var humanoActual = arrayHumanos[0];

mostrarDatos(humanoActual);

function mostrarDatos(humano)
{
    document.getElementById("nombre").value = humano.getDatos()["nombre"];
    document.getElementById("peso").value = humano.getDatos()["peso"];
    document.getElementById("edad").value = humano.getDatos()["edad"];
}

function realizarAccion(accion)
{
    if (accion == "primero")
    {
        humanoActual = arrayHumanos[0];
        mostrarDatos(humanoActual);
    }
    else if (accion == "anterior")
    {
        var indiceActual = arrayHumanos.indexOf(humanoActual);
        if (indiceActual > 0)
        {
            humanoActual = arrayHumanos[indiceActual-1];
            mostrarDatos(humanoActual);
        }
    }
    else if (accion == "siguiente")
    {
        var indiceActual = arrayHumanos.indexOf(humanoActual);
        if (indiceActual < arrayHumanos.length - 1)
        {
            humanoActual = arrayHumanos[indiceActual+1];
            mostrarDatos(humanoActual);
        }
    }
    else if (accion == "ultimo")
    {
        humanoActual = arrayHumanos[arrayHumanos.length-1];
        mostrarDatos(humanoActual);
    }
    else if (accion == "alta")
    {
        modificarEstado(
            [
                {"id":"primero","estado":true},
                {"id":"anterior","estado":true},
                {"id":"siguiente","estado":true},
                {"id":"ultimo","estado":true},
                {"id":"alta","estado":true},
                {"id":"baja","estado":true},
                {"id":"modificacion","estado":true},
                {"id":"nombre","estado":false},
                {"id":"peso","estado":false},
                {"id":"edad","estado":false}
            ]
        )

        document.getElementById("nombre").value="";
        document.getElementById("peso").value="";
        document.getElementById("edad").value="";

        var botones = "<button onclick=\"realizarAccion('darAlta')\">Aceptar</button><button onclick=\"realizarAccion('cancelarAlta')\">Cancelar</button>";
        document.getElementById("botonesAccion").innerHTML = botones;
    }
    else if (accion == "cancelarAlta")
    {
        modificarEstado(
            [
                {"id":"primero","estado":false},
                {"id":"anterior","estado":false},
                {"id":"siguiente","estado":false},
                {"id":"ultimo","estado":false},
                {"id":"alta","estado":false},
                {"id":"baja","estado":false},
                {"id":"modificacion","estado":false},
                {"id":"nombre","estado":true},
                {"id":"peso","estado":true},
                {"id":"edad","estado":true}
            ]
        )
        mostrarDatos(humanoActual);
        
        document.getElementById("botonesAccion").innerHTML = "";
    }
    else if (accion == "darAlta")
    {
        var nombreIntroducido = document.getElementById("nombre").value;
        var pesoIntroducido = document.getElementById("peso").value;
        var edadIntroducida = document.getElementById("edad").value;

        var nuevoHumano = new Humano(nombreIntroducido,pesoIntroducido,edadIntroducida);

        arrayHumanos.push(nuevoHumano);

        humanoActual = nuevoHumano;

        mostrarDatos(humanoActual);

        modificarEstado(
            [
                {"id":"primero","estado":false},
                {"id":"anterior","estado":false},
                {"id":"siguiente","estado":false},
                {"id":"ultimo","estado":false},
                {"id":"alta","estado":false},
                {"id":"baja","estado":false},
                {"id":"modificacion","estado":false},
                {"id":"nombre","estado":true},
                {"id":"peso","estado":true},
                {"id":"edad","estado":true}
            ]
        )

        document.getElementById("botonesAccion").innerHTML = "";
    }
    else if (accion == "baja")
    {
        if (arrayHumanos[0] == humanoActual)
        {
            var humanoSiguiente = arrayHumanos[1];
            mostrarDatos(humanoSiguiente);

            arrayHumanos.splice(arrayHumanos.indexOf(humanoActual),1);

            humanoActual = humanoSiguiente
        }
        else if (arrayHumanos[arrayHumanos.length-1] == humanoActual)
        {
            var humanoSiguiente = arrayHumanos[arrayHumanos.length-2];
            mostrarDatos(humanoSiguiente);
            arrayHumanos.splice(arrayHumanos.indexOf(humanoActual),1);
            humanoActual = humanoSiguiente;
        }
        else
        {
            var humanoSiguiente = arrayHumanos[arrayHumanos.indexOf(humanoActual)+1];
            mostrarDatos(humanoSiguiente);
            arrayHumanos.splice(arrayHumanos.indexOf(humanoActual),1);
            humanoActual = humanoSiguiente;
        }
    }
    else if (accion == "modificacion")
    {
        modificarEstado(
            [
                {"id":"primero","estado":true},
                {"id":"anterior","estado":true},
                {"id":"siguiente","estado":true},
                {"id":"ultimo","estado":true},
                {"id":"alta","estado":true},
                {"id":"baja","estado":true},
                {"id":"modificacion","estado":true},
                {"id":"nombre","estado":false},
                {"id":"peso","estado":false},
                {"id":"edad","estado":false}
            ]
        )

        var botones = "<button onclick=\"realizarAccion('confirmarModificacion')\">Aceptar</button><button onclick=\"realizarAccion('cancelarModificacion')\">Cancelar</button>";
        document.getElementById("botonesAccion").innerHTML = botones;
    }
    else if (accion == "confirmarModificacion")
    {
        var indiceActual = arrayHumanos.indexOf(humanoActual);

        var nuevoNombre = document.getElementById("nombre").value;
        var nuevoPeso = document.getElementById("peso").value;
        var nuevaEdad = document.getElementById("edad").value;

        var nuevoHumano = new Humano(nuevoNombre,nuevoPeso,nuevaEdad);

        arrayHumanos[indiceActual] = nuevoHumano;

        humanoActual = nuevoHumano;

        mostrarDatos(humanoActual);

        document.getElementById("botonesAccion").innerHTML = "";

        modificarEstado(
            [
                {"id":"primero","estado":false},
                {"id":"anterior","estado":false},
                {"id":"siguiente","estado":false},
                {"id":"ultimo","estado":false},
                {"id":"alta","estado":false},
                {"id":"baja","estado":false},
                {"id":"modificacion","estado":false},
                {"id":"nombre","estado":true},
                {"id":"peso","estado":true},
                {"id":"edad","estado":true}
            ]
        )
    }
    else if (accion == "cancelarModificacion")
    {
        mostrarDatos(humanoActual);
        
        document.getElementById("botonesAccion").innerHTML = "";

        modificarEstado(
            [
                {"id":"primero","estado":false},
                {"id":"anterior","estado":false},
                {"id":"siguiente","estado":false},
                {"id":"ultimo","estado":false},
                {"id":"alta","estado":false},
                {"id":"baja","estado":false},
                {"id":"modificacion","estado":false},
                {"id":"nombre","estado":true},
                {"id":"peso","estado":true},
                {"id":"edad","estado":true}
            ]
        )
    }
    else if (accion == "listado")
    {
        Humano.mostrarHumanos(arrayHumanos);
    }
    else if (accion == "muestrapersona")
    {
        Humano.mostrarHumanos(new Array(humanoActual));
    }
    else if (accion == "otrolistado")
    {
        mostrarOtroListado(arrayHumanos);
    }
}

function modificarEstado(botones)
{
    botones.forEach(boton => {
        document.getElementById(boton["id"]).disabled=boton["estado"];
    });
}

function mostrarOtroListado(arrayDeHumanos)
{
    var tabla = "<h2>Listado de personas NO FORMA PARTE DE LA CLASE </h2><table border><th>Nombre</th><th>Peso</th><th>Edad</th><th>Categoria</th>";

    arrayDeHumanos.forEach(humano => {
        tabla += "<tr><td>"+humano.getDatos()["nombre"]+"</td><td>"+humano.getDatos()["peso"]+"</td><td>"+humano.getDatos()["edad"]+"</td><td>"+humano.getDatos()["categoria"]+"</td></tr>";
    });
        
    tabla += "</table>";

    var ventana = window.open("", "Listado Humanos", "width=400,height=200");

    ventana.document.write(tabla+"<br/><button onclick=\"window.close()\">Cerrar ventana</button>");
}
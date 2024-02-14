class Paciente {

    constructor (nombre, dni, tipo)
    {
        this._nombre = nombre;
        this._dni = dni;
        this._tipo = tipo;
    }

    // GETTERS

    getNombre()
    {
        return this._nombre;
    }

    getDni()
    {
        return this._dni;
    }

    getTipo()
    {
        return this._tipo;
    }

    // SETTERS

    setNombre(nombre) 
    {
        this._nombre = nombre;
    }

    setDni(dni)
    {
        this._dni = dni;
    }

    setTipo(tipo) 
    {
        this._tipo = tipo;
    }
      
}

var letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKE";

var arrayPacientes = [
    new Paciente("Juan","94736521Z","preoperatorio"),
    new Paciente("Antonio","12345678S","preoperatorio"),
    new Paciente("Manuel","09876543H","posoperatorio"),
    new Paciente("Pedro","958100385F","posoperatorio")
];

var listaPreoperatorio = [
    new Paciente("Juan","94736521Z","preoperatorio"),
    new Paciente("Antonio","12345678S","preoperatorio"),
];

var listaPostoperatorio = [
    new Paciente("Manuel","09876543H","posoperatorio"),
    new Paciente("Pedro","958100385F","posoperatorio")
];

actualizarListas();

function crearPaciente()
{
    // 1. RECOGEMOS LOS DATOS DE LA INTERFAZ EN VARIABLES
    var nombre = document.getElementById("nombre").value;
    var dni = document.getElementById("dni").value;
    var tipo = document.getElementById("tipo").value;
    
    
    // 2. CREAMOS EL PACIENTE Y LO METEMOS EN EL ARRAY
    var miPaciente = new Paciente(nombre,dni,tipo);
    arrayPacientes.push(miPaciente);

    if (tipo == "posoperatorio" )
    {
        listaPostoperatorio.push(miPaciente);
    }
    else
    {
        listaPreoperatorio.push(miPaciente);
    }

    // O alternativamente:
    // arrayPacientes.push( new Paciente(nombre,dni,tipo) );

    
    // 3. BORRAMOS LAS CAJAS DE TEXTO
    document.getElementById("nombre").value = "";
    document.getElementById("dni").value = "";

    // 4. ACTUALIZAMOS LAS LISTAS PARA MOSTRAR LOS CAMBIOS
    actualizarListas();

    // 5. VOLVEMOS AL ESTADO POR DEFECTO
    document.getElementById("dni").disabled = true;
    document.getElementById("registrar").disabled = true;
}

function actualizarListas()
{
    // 1. RECORREMOS CADA ARRAY Y PONEMOS LOS PACIENTES EN CADA LISTA CORRESPONDIENTE
    var pacientesPostoperatorio = "";
    listaPostoperatorio.forEach(paciente => {
        pacientesPostoperatorio += ("<option>" + paciente.getNombre() + "(" + paciente.getDni() + ")</option>");
    });

    var pacientesPreoperatorio = "";
    listaPreoperatorio.forEach(paciente => {
        pacientesPreoperatorio += ("<option value=\""+paciente.getDni()+"\">" + paciente.getNombre() + "(" + paciente.getDni() + ")</option>");
    });

    // 2. PONEMOS LAS OPCIONES EN LAS LISTAS
    document.getElementById("pre-operatorio").innerHTML = pacientesPreoperatorio;
    document.getElementById("post-operatorio").innerHTML = pacientesPostoperatorio;

}

function habilitarDni()
{
    var texto = document.getElementById("nombre").value;
    var numeros = /\d/;
    
    if ( ( texto.trim() != "" ) && ( !numeros.test(texto) ) )
    {
        document.getElementById("dni").disabled = false;
    }
    else {
        document.getElementById("dni").disabled = true;
    }
}

function habilitarRegistro()
{
    var dniIntroducido = document.getElementById("dni").value;
    var formato = /\d{8}[a-zA-Z]{1}/;

    if ( (dniIntroducido.trim() != "") && (formato.test(dniIntroducido)) && letraDNICorrecta(dniIntroducido))
    {
        document.getElementById("registrar").disabled = false;
    }
    else
    {
        document.getElementById("registrar").disabled = true;
    }
}

function letraDNICorrecta(dni)
{
    var numeros = dni.substring( 0, (dni.length-1) );

    var resto = numeros % 23;

    var letraDNI = letrasDNI[resto];

    if ( letraDNI == dni.charAt(dni.length-1) )
    {
        return true;
    }
    else
    {
        return false;
    }
}

function moverAPreoperatorio()
{
    var dniPacienteSeleccionado = document.getElementById("post-operatorio").value;

    
}
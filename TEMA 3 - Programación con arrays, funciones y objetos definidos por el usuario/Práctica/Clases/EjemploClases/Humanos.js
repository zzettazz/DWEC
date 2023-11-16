class Humano
{
    constructor(edad,nombre,estatura,sexo)
    {
        this._edad = edad;
        this._nombre = nombre;
        this._estatura = estatura;
        this._sexo = sexo;
    }

    toString()
    {
        return "[Nombre: "+this._nombre+" || Sexo: "+this._sexo+" || Edad: "+this._edad+" || Estatura: "+this._estatura+"]"
    }

    static mostrarArray(arrayHumanos)
    {
        var t = "";
        arrayHumanos.forEach(humano => {
            t += humano.toString() + "<br/>";
        });
        return t;
    }
}

var humano1 = new Humano(25,"Pedro García",167,"M");
var humano2 = new Humano(45,"Paquita",187,"F");

var arrayHumanos = [humano1,humano2];
document.getElementById("divDatos").innerHTML = Humano.mostrarArray(arrayHumanos);
console.log(Humano.mostrarArray(arrayHumanos));

function mostrarTablaDatos()
{
    var tabla = "<table border><th>Nombre</th><th>Sexo</th><th>Edad</th><th>Estatura</th>";
    arrayHumanos.forEach(humano => {
        tabla += ("<tr><td>"+humano._nombre+"</td><td>"+humano._sexo+"</td><td>"+humano._edad+"</td><td>"+humano._estatura+"</td></tr>");
    });

    tabla += "</table>";
    
    var nombreVentana = "Ventana Tabla";
 
    // CREAMOS LA VENTANA
    var ventana = window.open("", nombreVentana, "width=400,height=200");
 
    // MODIFICAMOS LA VENTANA
    ventana.document.write(tabla);
 
}
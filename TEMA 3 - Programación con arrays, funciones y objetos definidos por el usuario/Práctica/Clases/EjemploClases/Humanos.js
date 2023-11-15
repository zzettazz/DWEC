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
}

var humano1 = new Humano(25,"Pedro García",167,"M");
var humano2 = new Humano(45,"Paquita",187,"F");

var arrayHumanos = [humano1,humano2];

arrayHumanos.forEach(humano => {
    console.log(humano.toString());
});
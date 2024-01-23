class Coche {

    constructor(marca, modelo, anioFabricacion, precioCompra, precioVenta) {
        this._marca = marca;
        this._modelo = modelo;
        this._anioFabricacion = anioFabricacion;
        this._precioCompra = precioCompra;
        this._precioVenta = precioVenta;
    }

    calculaGanancia() {
        return (this._precioVenta - this._precioCompra);
    }

    calculaEdad() {
        var anioActual = new Date();
        return (anioActual.getFullYear() - this._anioFabricacion);
    }

    static listarCoche() {
        var tabla = "" +
            "<table border>" +
            "<tr>" +
            "<th>Marca</th>" +
            "<th>Modelo</th>" +
            "<th>Año Fabricacion</th>" +
            "<th>Edad del coche</th>" +
            "<th>Precio Compra</th>" +
            "<th>Precio de venta</th>" +
            "<th>Ganancia/Perdida</th>" +
            "</tr>" +
        "";

        arrayCoches.forEach(coche => {
            console.log(coche._marca);
        });
    }

}

var arrayCoches = [
    new Coche("Opel", "Corsa", 2014, 5000, 6500),
    new Coche("Ferrari", "Enzo", 2010, 15000, 20000),
    new Coche("Lamborghini", "Murcielago", 2000, 8000, 17000)
];


    

function alta()
{
    var marca = document.getElementById("marca").value;
    var modelo = document.getElementById("modelo").value;
    var anio = document.getElementById("anio").value;
    var precioVenta = document.getElementById("precioVenta").value;
    var precioCompra = document.getElementById("precioCompra").value;

    if (confirm("¿Seguro que quieres dar de alta?") && marcaValida(marca) && modeloValido(modelo) && anioValido(anio) && precioValido(precioVenta) && precioValido(precioCompra))
    {
        arrayCoches.push(new Coche(marca,modelo,anioFabricacion,precioCompra,precioVenta));
    }
    else 
    {
        alert("La operacion ha sido cancelada");
    }
}

function marcaValida(marca)
{
    return (marca >= 6 && marca <= 20);

    // true && true = true;
    // true && false = false;
    // false && true = false;
    // falase && false = false;
}

function modeloValido(modelo)
{
    return (modelo >= 6 && modelo <= 20);
}

function anioValido(anio)
{    
    var expresion = /\d{4}/; 
    var anioActual = new Date();
    return (anio <= anioActual.getFullYear() && expresion.test(anio));
}

function precioValido(precio)
{
    var expresion = /\d/;
    return (expresion.test(precio) && precio >= 0);
}

Coche.listarCoche();
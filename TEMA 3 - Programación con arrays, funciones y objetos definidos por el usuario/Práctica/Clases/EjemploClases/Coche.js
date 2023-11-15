class Coche {
    constructor(marca,kilometraje)
    {
        this.marca = marca;
        this.kilometraje = kilometraje;
    }

    getKilometraje()
    {
        return this.kilometraje;
    }

    getMarca()
    {
        return this.marca;
    }

    setMarca(nuevaMarca)
    {
        this.marca = nuevaMarca;
    }

    setKilometraje(nuevoKilometraje)
    {
        this.kilometraje = nuevoKilometraje;
    }
}

var miCoche = new Coche("FIAT","12.000");

getDatos(miCoche);
miCoche.setKilometraje("150.000");
miCoche.setMarca("Volkswagen");
getDatos(miCoche);

function getDatos(coche)
{
    console.log(coche);
    console.log("Kilometraje: "+coche.getKilometraje());
    console.log("Marca: "+coche.getMarca());
}

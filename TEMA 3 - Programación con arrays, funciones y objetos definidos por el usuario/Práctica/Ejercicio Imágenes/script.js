var miArray = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.png","13.jpg","14.png","15.jpg"];

function siguiente()
{
    var imagenActual = document.getElementById("imagen").value;

    var posicion = miArray.indexOf(imagenActual);

    var siguienteImagen;

    if (posicion == (miArray.length-1)) siguienteImagen = miArray[0];
    else siguienteImagen = miArray[posicion+1];

    document.getElementById("imagen").value = siguienteImagen;
    document.getElementById("imagenIMG").innerHTML = "<img src=\"img/"+siguienteImagen+"\"></img>";
}

function anterior()
{
    var imagenActual = document.getElementById("imagen").value;

    var posicion = miArray.indexOf(imagenActual);

    var siguienteImagen;

    if (posicion == 0) siguienteImagen = miArray[(miArray.length)-1];
    else siguienteImagen = miArray[posicion-1];

    document.getElementById("imagen").value = siguienteImagen;
    document.getElementById("imagenIMG").innerHTML = "<img src=\"img/"+siguienteImagen+"\"></img>";
}
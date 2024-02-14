function insertar()
{
    var codigoFila = '<td>' + document.getElementById('texto').value +'</td>';

    codigoFila += "<td><button type='button' onclick='clonarEncima(this);'>Clonar encima</button></td>";

    codigoFila += "<td><button type='button' onclick='eliminar(this);'>Eliminar</button></td>";
    
    var fila = document.createElement('tr');
    fila.innerHTML = codigoFila;

    document.getElementById('tabla').appendChild(fila);
}

function eliminar(boton)
{
    var fila = boton.parentNode.parentNode;
    document.getElementById('tabla').removeChild(fila);
}

function clonarEncima(boton)
{
    var fila = boton.parentNode.parentNode;
    document.getElementById('tabla').insertBefore(fila.cloneNode(true),fila);
}

var miFila = "<td>Cerdo</td>";

var miColumna = document.createElement("tr");

miColumna.innerHTML = miFila;

document.getElementById("tabla").appendChild(miColumna);

var miColumnaClonada = cloneNode(miColumna);

document.getElementById("tabla").appendChild(miColumnaClonada);
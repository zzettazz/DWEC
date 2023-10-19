function generaAleatorios()
{
    var cantidad = Number(document.getElementById("cantidadNumeros").value);
    console.log(cantidad);

    if (isNaN(cantidad))
    {
        alert("Has introducido un dato INVÁLIDO");
    }
    else
    {
        var resultado = [];

        for (i=0; i < cantidad; i++)
        {
            resultado[i] = (Math.floor(Math.random() * 100) + 1);
        }

        var numerosOrdenados = resultado.sort(function(a, b) {return a - b;});
        var textoResultado = "";

        for (i=0; i< resultado.length; i++)
        {
            textoResultado = textoResultado.concat(numerosOrdenados[i]+" ")
        }

        document.getElementById("resultado").innerHTML=textoResultado;
    }

}

function generaAleatoriosMinMax()
{
    var cantidad = parseInt(document.getElementById("cantidad").value);
    var min = parseInt(document.getElementById("numMin").value);
    var max = parseInt(document.getElementById("numMax").value);

    if (isNaN(cantidad) || isNaN(min) || isNaN(max))
    {
        alert("Has introducido un dato INVÁLIDO");
    }
    else
    {
        var resultado = [];

        for (i=0; i < cantidad; i++)
        {
            resultado[i] = (Math.floor(Math.random() * (max - min + 1)) + min);
        }

        var numerosOrdenados = resultado.sort(function(a, b) {return a - b;});
        var textoResultado = "";

        for (i=0; i< resultado.length; i++)
        {
            textoResultado = textoResultado.concat(numerosOrdenados[i]+" ")
        }

        document.getElementById("resultadoMinMax").innerHTML=textoResultado;
    }

}
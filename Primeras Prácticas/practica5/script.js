function mostrar()
{

    var numseleccionado = document.getElementById("numero").value;

    if (numseleccionado < 1 || numseleccionado > 6)
    {
        alert("El número debe estar entre 1 y 6 (incluídos)");
        document.getElementById("numero").value="";
    }
    else
    {
        const MIN = 1;
        const MAX = 6;
        var num = MIN;
        var texto = "";

        while (num <= (numseleccionado))
        {
            texto = texto.concat("<h"+num+">Encabezado de nivel "+num+"</h"+num+">");
            num ++;
        }

        // SI QUIEREMOS QUE SALGA REPETIDO LA CABECERA DEL MEDIO PONEMOS:  num = numseleccionado;
        // EN CASO CONTRARIO, TENEMOS QUE RESTALE 1 PARA QUE EMPIEZE POR LA SIGUIENTE Y NO REPITA :  num = (numseleccionado-1);
        num = (numseleccionado-1);

        while (num >= MIN)
        {
            texto = texto.concat("<h"+num+">Encabezado de nivel "+num+"</h"+num+">");
            num --;
        }

        document.getElementById("parrafos").innerHTML=texto;
    }

}
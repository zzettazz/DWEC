function comprobarDivisible()
{
    var texto = "";
    
    var numero = Number(document.getElementById("numero").value);
    var numMin = Number(document.getElementById("min").value);
    var numMax = Number(document.getElementById("max").value);

    for (var i=numMin ; i <= numMax; i++)
    {
        if (numMax <= numero && numero % i == 0) 
        {
            texto += ("El número "+numero+" es divisible entre "+i+"<br/>")
        }
        else if (numMax > numero)
        {
            alert("Debes introducir un número válido")
        }
    }

    document.getElementById("div1").innerHTML=texto
}
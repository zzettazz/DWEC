function calcular()
{    
    var numIntroducido = document.getElementById("numero").value;

    numIntroducido = Number(numIntroducido);

    if (numIntroducido != NaN)
    {
        if (numIntroducido > 0)
        { 
            var esPrimo = true;

            for (i = 2; i < numIntroducido; i++)
            {
                if (numIntroducido % i == 0) esPrimo = false
            }

            var resultado = "";
            
            if (esPrimo == true) resultado = ("El número "+numIntroducido+" es primo.");
            else resultado = ("El número "+numIntroducido+" NO es primo.");          

            document.getElementById("resultado").innerHTML=resultado;
        }
        else
        {
            alert("Debes introducir un número válido");
            document.getElementById("numero").value="";
        }
    }
    else
    {
        alert("Debes introducir un número válido");
        document.getElementById("numero").value="";
    }

}
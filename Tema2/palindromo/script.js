function comprobar()
{
    var cadenaInicial = document.getElementById("textoEntrada").value;
    var cadena = cadenaInicial.toLowerCase();
    var cadenaSeparada = cadena.split("");
    var arrayInverso = cadenaSeparada.reverse();
    var cadenaUnida = arrayInverso.join("");
    if (cadena == cadenaUnida)
    {
        document.getElementById("resultado").innerHTML="La cadena "+cadenaInicial+" es un palindromo"
    }
    else
    {
        document.getElementById("resultado").innerHTML="La cadena "+cadenaInicial+" NO es un palindromo"
    }
}
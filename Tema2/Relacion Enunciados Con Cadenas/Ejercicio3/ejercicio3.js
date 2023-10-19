const ciudades = ["madrid", "barcelona", "bilbao", "sevilla"]

function procesar()
{
    var ciudadIntroducida = document.getElementById("ciudadIntroducida").value;
    var ciudad = ciudadIntroducida.toLowerCase();

    if (ciudades.includes(ciudad)) document.getElementById("resultado").innerHTML="La ciudad introducida es "+(ciudad.charAt(0).toUpperCase().concat(ciudad.substring(1,ciudad.length).toLowerCase()));
    else document.getElementById("resultado").innerHTML="La ciudad introducida no es correcta";
}